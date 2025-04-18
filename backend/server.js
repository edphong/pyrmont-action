/* ─────────────────────────────────────────────────────────────
   DEPENDENCIES
   ──────────────────────────────────────────────────────────── */
const express  = require('express');
const cors     = require('cors');
const multer   = require('multer');                 // ⇠ handles multipart/form‑data
const { Storage } = require('@google-cloud/storage');
const sqlite3  = require('sqlite3').verbose();
const chalk    = require('chalk');                  // colourful logs

/* ─────────────────────────────────────────────────────────────
   CONFIG
   ──────────────────────────────────────────────────────────── */
const app    = express();
const upload = multer();                            // keep files in memory

app.use(cors());
app.use(express.json());

const BUCKET_NAME = process.env.BUCKET || 'pyrmont_action';

/* Use Application‑Default Credentials
   • locally  : `gcloud auth application-default login`
   • Cloud Run: set service‑account on the service               */
const storage = new Storage();
const bucket  = storage.bucket(BUCKET_NAME);

// timestamp helper
const ts = () => chalk.gray(new Date().toISOString().slice(11, 19));

console.log(`${ts()} ⚙️  Using bucket: ${chalk.yellow(BUCKET_NAME)}`);
console.log(`${ts()} ⚙️  Project    : ${chalk.yellow(storage.projectId || 'unknown')}`);

/* ─────────────────────────────────────────────────────────────
   SQLITE  – Users table
   ──────────────────────────────────────────────────────────── */
const db = new sqlite3.Database('./database.db', err =>
    err
        ? console.error(err.message)
        : console.log(`${ts()} ✅ SQLite connected`)
);

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    username   TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

/* ─ Users CRUD ─────────────────────────────────────────────── */
app.get('/api/users', (_req, res) =>
    db.all('SELECT * FROM users', [], (err, rows) =>
        err ? res.status(500).json({ error: err.message }) : res.json(rows)
    )
);

app.post('/api/users', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username is required.' });

  db.run('INSERT INTO users (username) VALUES (?)', [username], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, username });
  });
});

app.delete('/api/users/:id', (req, res) => {
  db.run('DELETE FROM users WHERE id = ?', [req.params.id], function (err) {
    if (err)          return res.status(500).json({ error: err.message });
    if (!this.changes) return res.status(404).json({ error: 'User not found.' });
    res.json({ message: 'User deleted.' });
  });
});

/* ─────────────────────────────────────────────────────────────
   GALLERY  – Google Cloud Storage
   ──────────────────────────────────────────────────────────── */

/* 1) UPLOAD  – save + make the object publicly readable */
app.post('/api/gallery', upload.single('file'), async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'File missing' });

    const { originalname, buffer, mimetype } = req.file;
    console.log(`${ts()} ⬆️  Upload → ${originalname} (${buffer.length} bytes)`);

    const gcsFile = bucket.file(originalname);
    await gcsFile.save(buffer, { contentType: mimetype });
    await gcsFile.makePublic();                             // 👈 key line

    res.json({ ok: true, name: originalname });
  } catch (err) { next(err); }
});

/* 2) LIST  – return stable public URLs */
app.get('/api/gallery', async (_req, res, next) => {
  try {
    console.log(`${ts()} ⏳ List …`);
    const [files] = await bucket.getFiles();
    console.log(`${ts()} ✅ List ← ${files.length} objects`);

    const items = files.map(f => ({
      name: f.name,
      url : `https://storage.googleapis.com/${BUCKET_NAME}/${encodeURIComponent(f.name)}`
    }));

    res.json(items);
  } catch (err) { next(err); }
});

/* 3) DELETE */
app.delete('/api/gallery/:name', async (req, res, next) => {
  try {
    console.log(`${ts()} 🗑️  Delete → ${req.params.name}`);
    await bucket.file(req.params.name).delete();
    res.json({ ok: true });
  } catch (err) { next(err); }
});

/* ─────────────────────────────────────────────────────────────
   GENERIC ERROR HANDLER
   ──────────────────────────────────────────────────────────── */
app.use((err, _req, res, _next) => {
  console.error(chalk.red(`${ts()} ❌ ERROR`), err.message);
  if (err.errors?.[0]?.message)
    console.error(chalk.red('    ↳'), err.errors[0].message);
  res.status(500).json({ error: err.message });
});

/* ─────────────────────────────────────────────────────────────
   START SERVER
   ──────────────────────────────────────────────────────────── */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`${ts()} 🚀 API listening on http://localhost:${PORT}`)
);

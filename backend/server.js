const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());


// creates our database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) console.error(err.message);
  else console.log("Connected to SQLite database.");
});

// Create 'users' table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS test (
    email TEXT PRIMARY KEY,
    password TEXT NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    mobilePhone VARCHAR(15) NOT NULL,
    areaOfInterest TEXT NOT NULL,
    streetName VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(3) NOT NULL,
    postcode VARCHAR(4) NOT NULL
  );

`);



const userRouter = require('./user/userRoutes')
app.use("", function(req, res, next) {
  req.db = db;
  next();
},
userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

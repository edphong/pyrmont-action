// ─────────────────────────────────────────────────────────────
//  frontend/src/api.js
//  Reads the API base URL from Vite env‑vars so it works in
//  both dev (`npm run dev`) and production (`npm run build`)
// ─────────────────────────────────────────────────────────────
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000/api",
});

/* --------------- Gallery (Google Cloud Storage) --------------- */

/**
 * @param {FormData} formData   – <input type="file"> content
 * @param {object}   cfg        – optional axios config (e.g. { onUploadProgress })
 */
export const uploadImage = (formData, cfg = {}) =>
    api.post("/gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        ...cfg,                                // ➜ progress bar, cancel token, etc.
    });

export const listImages  = ()         => api.get("/gallery");
export const deleteImage = (name)     =>
    api.delete(`/gallery/${encodeURIComponent(name)}`);

/* -------------------- Users (SQLite) -------------------------- */

export const listUsers   = ()             => api.get("/users");
export const createUser  = (username)     => api.post("/users", { username });
export const deleteUser  = (id)           => api.delete(`/users/${id}`);

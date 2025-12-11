const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', async (req, res) => {
    const { name, author, isbn } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO book (name, author, isbn) VALUES (?, ?, ?)',
            [name, author, isbn]
        );
        res.json({ id_book: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ all
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM book');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ one
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM book WHERE id_book=?',
            [req.params.id]
        );
        res.json(rows[0] || {});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { name, author, isbn } = req.body;
    try {
        await db.execute(
            'UPDATE book SET name=?, author=?, isbn=? WHERE id_book=?',
            [name, author, isbn, req.params.id]
        );
        res.json({ message: 'Updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await db.execute('DELETE FROM book WHERE id_book=?', [
            req.params.id,
        ]);
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

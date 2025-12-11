const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', async (req, res) => {
    const { fname, lname, streetAddress } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO borrower (fname, lname, streetAddress) VALUES (?, ?, ?)',
            [fname, lname, streetAddress]
        );
        res.json({ id_borrower: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ all
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM borrower');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ one
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM borrower WHERE id_borrower=?',
            [req.params.id]
        );
        res.json(rows[0] || {});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { fname, lname, streetAddress } = req.body;
    try {
        await db.execute(
            'UPDATE borrower SET fname=?, lname=?, streetAddress=? WHERE id_borrower=?',
            [fname, lname, streetAddress, req.params.id]
        );
        res.json({ message: 'Updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await db.execute('DELETE FROM borrower WHERE id_borrower=?', [
            req.params.id,
        ]);
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

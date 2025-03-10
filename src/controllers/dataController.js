const db = require('../config');

exports.getAllData = (req, res) => {
    db.query('SELECT * FROM data', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

exports.getDataById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM data WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results[0]);
        }
    });
};

exports.addData = (req, res) => {
    const { name, value } = req.body;
    db.query('INSERT INTO data (name, value) VALUES (?, ?)', [name, value], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ id: results.insertId, name, value });
        }
    });
};

exports.deleteData = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM data WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Data deleted successfully' });
        }
    });
};
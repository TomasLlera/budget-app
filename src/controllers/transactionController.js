const pool = require('../db');

exports.getAll = async (req, res) => {
  const [rows] = await pool.query(
    'SELECT * FROM transactions WHERE user_id = ? ORDER BY date DESC',
    [req.userId]
  );
  res.json(rows);
};

exports.create = async (req, res) => {
  const { type, amount, category, description, date } = req.body;
  const [result] = await pool.query(
    'INSERT INTO transactions (user_id, type, amount, category, description, date) VALUES (?, ?, ?, ?, ?, ?)',
    [req.userId, type, amount, category, description, date]
  );
  res.status(201).json({ id: result.insertId });
};

exports.remove = async (req, res) => {
  await pool.query(
    'DELETE FROM transactions WHERE id = ? AND user_id = ?',
    [req.params.id, req.userId]
  );
  res.json({ message: 'Eliminado' });
};
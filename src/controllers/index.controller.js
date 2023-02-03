import { pool } from "../db.js";

export const getPong = async (req, res) => {
  const [result] = await pool.query("SELECT 'pong' As result");
  res.json(result[0]);
};

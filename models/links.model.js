import { pool } from "../db/index.js";

export async function getLinksByWeek(week) {
  const sqlQuery =
    "SELECT * FROM links WHERE week = ($1);";
    const parameterValues = [week]
  const result = await pool.query(sqlQuery, parameterValues);
  const links = result.rows;
  return links;
}

export async function createLink(newLink) {
  const sqlQuery =
    "INSERT INTO links (column1, column2) VALUES ($1, $2) RETURNING *;";
  const parameterValues = [newLink.valueXX, newLink.valueXX];
  const result = await pool.query(sqlQuery, parameterValues);
  const created = result.rows[0];
  return created;
}


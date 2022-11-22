import { pool } from "../db/index.js";

export async function MODEL1() {
  const sqlQuery =
    "SELECT XXX;";
  const result = await pool.query(sqlQuery);
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


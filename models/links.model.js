import { pool } from "../db/index.js";

export async function getLinksByWeek(week) {
  const sqlQuery =
    "SELECT * FROM links INNER JOIN subjects ON links.subject = subjects.subject_id WHERE week = ($1);";
    const parameterValues = [week]
  const result = await pool.query(sqlQuery, parameterValues);
  const links = result.rows;
  return links;
}

export async function getLinksBySubject(subject) {
  const sqlQuery =
    "SELECT * FROM links INNER JOIN subjects ON links.subject = subjects.subject_id WHERE subjects.subject = ($1);";
    const parameterValues = [subject]
  const result = await pool.query(sqlQuery, parameterValues);
  const links = result.rows;
  return links;
}

export async function createLink(newLink) {
  const sqlQuery =
    "INSERT INTO links (link, title, description, week, subject) VALUES ($1, $2, $3, $4, $5) RETURNING *;";
  const parameterValues = [newLink.link, newLink.title, newLink.description, newLink.week, newLink.subject];
  const result = await pool.query(sqlQuery, parameterValues);
  const created = result.rows[0];
  return created;
}


import { pool } from "../db/index.js";

export async function getLinksByWeek(week) {
  const sqlQuery =
    "SELECT * FROM links INNER JOIN subjects ON links.subject = subjects.subject_id WHERE week = ($1) ORDER BY likes DESC;";
    const parameterValues = [week]
  const result = await pool.query(sqlQuery, parameterValues);
  const links = result.rows;
  return links;
}

export async function getLinksBySubject(subject) {
  const sqlQuery =
    "SELECT * FROM links INNER JOIN subjects ON links.subject = subjects.subject_id WHERE subjects.subject = ($1) ORDER BY likes DESC;";
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

export async function countLikes(id, linksCard) {
  const sqlQuery = "UPDATE links SET likes = ($1) WHERE link_id = $2 RETURNING * ;";
  const parameterValues = [linksCard.likes, id];
  const result = await pool.query(sqlQuery, parameterValues);
  const updated = result.rows[0]
  return updated;
}


import express from "express";
import { linksRouter } from "./routes/links.routes.js";

const app = express();

app.use(express.json());
app.use("/api/links", linksRouter);

export default app;
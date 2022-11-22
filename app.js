import express from "express";
import { linksRouter } from "./routes/links.routes.js";
import cors from "cors"

const app = express();
app.use(cors())

app.use(express.json());
app.use("/api/links", linksRouter);

export default app;
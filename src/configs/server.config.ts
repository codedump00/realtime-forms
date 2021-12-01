import express from "express";
import { createServer } from "http";
import cors from "cors";
import { getActiveUsers } from "../controllers/getActiveUsers.controller";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_, res) => res.status(200).json({ status: "OK" }));

app.get("/active/:opportunityId", getActiveUsers)

export const server = createServer(app);
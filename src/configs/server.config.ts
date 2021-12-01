import express from "express";
import { createServer } from "http";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const server = createServer(app);
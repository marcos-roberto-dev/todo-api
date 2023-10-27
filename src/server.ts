import express from "express";
import { boardRouter, columnRouter } from "./routes";

import todoRouter from "./routes/todo.routes";

const server = express();
const PORT = 3000;
const messageLog = "Server listening at http://localhost:3000 🚀";

server.use(express.json());

server.use("/api/board", boardRouter);
server.use("/api/column", columnRouter);
server.use("/api/todo", todoRouter);

server.listen(PORT, () => {
  console.log(messageLog);
});

export default server;

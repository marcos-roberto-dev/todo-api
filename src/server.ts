import express from "express";
import { boardRouter } from "./routes";

const server = express();
const PORT = 3000;
const messageLog = "Server listening at http://localhost:3000 🚀";

server.use("/board", boardRouter);

server.listen(PORT, () => {
  console.log(messageLog);
});

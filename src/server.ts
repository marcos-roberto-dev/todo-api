import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsonDocs from "./docs/swagger.json";

import { boardRouter, columnRouter, todoRouter } from "./router";

const server = express();
const PORT = process.env.PORT || 3000;
const messageLog = `Server listening at http://localhost:${PORT} 🚀`;

server.use(express.json());

server.get("/", (_, res) => {
  res.redirect(301, "/docs");
});

server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsonDocs));
server.use("/board", boardRouter);
server.use("/column", columnRouter);
server.use("/todo", todoRouter);

server.listen(PORT, () => {
  console.log(messageLog);
});

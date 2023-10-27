import express from "express";

const boardRouter = express.Router();

boardRouter.get("/", (req, res) => {
  res.send("Board");
});

export default boardRouter;

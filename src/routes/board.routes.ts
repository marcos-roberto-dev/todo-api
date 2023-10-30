import express from "express";
import { randomUUID } from "node:crypto";
import { boardRepository } from ".";
import { Board } from "../models";
import { ErrorValidate } from "../validations/Validate";
import { BoardValidate } from "../validations/models/BoardValidate";

const boardRouter = express.Router();

boardRouter.get("/", async (req, res) => {
  const boards = await boardRepository.findAll();

  return res.json(boards);
});

boardRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const board = await boardRepository.findById(id);

  if (!board) {
    return res.sendStatus(404);
  }

  return res.json(board);
});

boardRouter.post("/", async (req, res) => {
  const { name, description } = req.body;
  const board = new Board(randomUUID(), name, description ?? "", [], []);
  const errors = new ErrorValidate();

  if (BoardValidate.isValid(errors, board)) {
    await boardRepository.create(board);
    return res.sendStatus(201);
  }

  return res.status(400).json({
    message: errors.list,
    statusCode: 400,
  });
});

export default boardRouter;

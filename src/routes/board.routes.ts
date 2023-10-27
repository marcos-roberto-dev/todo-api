import express from "express";
import { randomUUID } from "node:crypto";
import { boardRepository } from ".";
import { Board } from "../models";

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
  const board = new Board(randomUUID(), name, description ?? "", []);

  await boardRepository.create(board);

  return res.sendStatus(201);
});

export default boardRouter;

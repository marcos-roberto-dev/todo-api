import express from "express";
import { randomUUID } from "node:crypto";
import { boardRepository } from "..";
import { Board } from "../../models";
import { ErrorValidate } from "../../validations/Validate";
import { BoardValidate } from "../../validations/models/BoardValidate";

export const board = express.Router();

board.get("/", async (req, res) => {
  const boards = await boardRepository.findAll();

  return res.json(boards);
});

board.get("/:id", async (req, res) => {
  const { id } = req.params;
  const board = await boardRepository.findById(id);

  if (!board) {
    return res.sendStatus(404);
  }

  return res.json(board);
});

board.post("/", async (req, res) => {
  const { name, description } = req.body;
  const board = new Board(randomUUID(), name, description ?? "", [], []);
  const errors = new ErrorValidate();

  if (BoardValidate.isValid(errors, board)) {
    await boardRepository.create(board);
    return res.status(201).json({
      result: {
        name: "success",
        message: "Column created successfully!",
      },
      statusCode: 201,
    });
  }

  return res.status(400).json({
    result: errors.list,
    statusCode: 400,
  });
});

export default board;

// curl -X POST -H "Content-Type: application/json" -d '{"name":"test","description":"test"}' http://localhost:3000/board

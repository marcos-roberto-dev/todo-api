import express from "express";
import { randomUUID } from "node:crypto";
import { columnRepository, todoRepository } from ".";
import CreateTodoSetColumnBoardService from "../services/CreateTodoSetColumnBoard.service";
import { Todo } from "../models";

const todoRouter = express.Router();

todoRouter.get("/", async (req, res) => {
  const todos = await todoRepository.findAll();
  return res.json(todos);
});

todoRouter.post("/", async (req, res) => {
  const { name, description, boardId, columnId } = req.body;
  const createTodoSetColumnBoardService = new CreateTodoSetColumnBoardService(
    todoRepository,
    columnRepository
  );
  const todo = new Todo(
    randomUUID(),
    name,
    description ?? "",
    columnId,
    boardId
  );

  createTodoSetColumnBoardService.execute(todo);

  return res.sendStatus(201);
});

export default todoRouter;

import express from "express";
import { randomUUID } from "node:crypto";
import { boardRepository, columnRepository, todoRepository } from "..";
import CreateTodoSetColumnBoardService from "../../services/CreateTodoSetColumnBoard.service";
import { Todo } from "../../models";
import { ErrorValidate } from "../../validations/Validate";
import { TodoValidate } from "../../validations/models/TodoValidate";

const todoRouter = express.Router();

todoRouter.get("/", async (_, res) => {
  const todos = await todoRepository.findAll();
  return res.json(todos);
});

todoRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await todoRepository.findById(id);

  if (!todo) {
    return res.sendStatus(404);
  }

  return res.json(todo);
});

todoRouter.post("/", async (req, res) => {
  const { name, description, boardId, columnId } = req.body;
  const createTodoSetColumnBoardService = new CreateTodoSetColumnBoardService(
    todoRepository,
    columnRepository,
    boardRepository
  );

  const todo = new Todo(
    randomUUID(),
    name,
    description ?? "",
    columnId,
    boardId
  );

  const errors = new ErrorValidate();

  if (TodoValidate.isValid(errors, todo)) {
    const response = await createTodoSetColumnBoardService.execute(todo);
    return res.status(response.statusCode).json(response);
  }

  return res.status(400).json({
    data: errors.list,
    statusCode: 400,
  });
});

export default todoRouter;

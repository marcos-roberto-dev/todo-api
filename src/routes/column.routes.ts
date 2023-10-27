import express from "express";
import { randomUUID } from "node:crypto";
import CreateColumnBoardValidService from "../services/CreateColumnBoardValid.service";
import { boardRepository, columnRepository, todoRepository } from ".";
import TodoMoveToColumnService from "../services/TodoMoveToColumn.service";
import { Column } from "../models";

const columnRouter = express.Router();

columnRouter.get("/", async (req, res) => {
  const columns = await columnRepository.findAll();

  return res.json(columns);
});

columnRouter.post("/", async (req, res) => {
  const { name, description, boardId } = req.body;
  const columnService = new CreateColumnBoardValidService(
    columnRepository,
    boardRepository
  );

  const column = new Column(randomUUID(), name, description ?? "", [], boardId);

  await columnService.execute(column);

  return res.sendStatus(201);
});

columnRouter.put("/move", async (req, res) => {
  const { todoId, fromColumnId, toColumnId } = req.body;

  const todoMoveToColumnService = new TodoMoveToColumnService(
    todoRepository,
    columnRepository
  );

  await todoMoveToColumnService.execute({ todoId, fromColumnId, toColumnId });

  return res.sendStatus(200);
});

export default columnRouter;

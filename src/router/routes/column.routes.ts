import express from "express";
import { randomUUID } from "node:crypto";
import CreateColumnBoardValidService from "../../services/CreateColumnBoardValid.service";
import { boardRepository, columnRepository } from "..";
import { Column } from "../../models";
import { ColumnValidate } from "../../validations/models/ColumnValidate";
import { ErrorValidate } from "../../validations/Validate";

const columnRouter = express.Router();

columnRouter.get("/", async (req, res) => {
  const columns = await columnRepository.findAll();

  return res.json(columns);
});

columnRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const column = await columnRepository.findById(id);

  if (!column) {
    return res.sendStatus(404);
  }

  return res.json(column);
});

columnRouter.post("/", async (req, res) => {
  const { name, description, boardId } = req.body;
  const columnService = new CreateColumnBoardValidService(
    columnRepository,
    boardRepository
  );

  const column = new Column(randomUUID(), name, description ?? "", [], boardId);
  const errors = new ErrorValidate();

  if (ColumnValidate.isValid(errors, column)) {
    const response = await columnService.execute(column);

    return res.status(response.statusCode).json(response);
  }

  return res.status(400).json({
    data: errors.list,
    statusCode: 400,
  });
});

export default columnRouter;

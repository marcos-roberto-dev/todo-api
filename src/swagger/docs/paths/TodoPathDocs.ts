import { OpenAPIV3 } from "openapi-types";
import { messageCode } from "../schemas/messageCode";
import { TodoModelDoc } from "../components/Todo";

export const TodoPathDocs: OpenAPIV3.PathsObject = {
  "/todo": {
    get: {
      tags: ["Todo"],
      summary: "List all Todos",
      description: "This route lists all registered Todos.",
      responses: {
        "200": {
          description: "Ok",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Todo",
                },
              },
            },
          },
        },
      },
    },
    post: {
      tags: ["Todo"],
      summary: "Create a new Todo",
      description: "This route creates a new Todo.",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "columnId", "boardId"],
              properties: {
                name: {
                  type: "string",
                  example: "new todo",
                  description: "Name of the Todo",
                },
                columnId: {
                  type: "string",
                  example: "column_id_mock_1",
                  description: "columnId of the Todo",
                },
                boardId: {
                  type: "string",
                  example: "board_id_mock_1",
                  description: "boardId of the Todo",
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Ok",
          content: {
            "application/json": {
              schema: messageCode({
                name: "new todo",
                message: "Todo created successfully!",
                statusCode: 201,
              }),
            },
          },
        },
        "400": {
          description: "Properties are required!",
          content: {
            "application/json": {
              schema: messageCode({
                statusCode: 400,
                list: [
                  { name: "name", message: "Name is required!" },
                  { name: "boardId", message: "BoardId is required!" },
                ],
              }),
            },
          },
        },
      },
    },
  },
  "/todo/{id}": {
    get: {
      tags: ["Todo"],
      summary: "List a Todo",
      description: "This route lists a specific Todo.",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Board Id",
          required: true,
          example: "todo_id_mock_1",
        },
      ],
      responses: {
        "200": {
          description: "Ok",
          content: {
            "application/json": {
              schema: TodoModelDoc,
            },
          },
        },
      },
    },
  },
  "/todo/move-to": {
    put: {
      tags: ["Todo"],
      summary: "Move a Todo to another column",
      description: "This route moves a Todo to another column.",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["todoId", "fromColumnId", "toColumnId"],
              properties: {
                todoId: {
                  type: "string",
                  example: "todo_id_mock_1",
                  description: "Id of the Todo",
                },
                fromColumnId: {
                  type: "string",
                  example: "column_id_mock_1",
                  description: "Id of the column",
                },
                toColumnId: {
                  type: "string",
                  example: "column_id_mock_2",
                  description: "Id of the column",
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Ok",
          content: {
            "application/json": {
              schema: messageCode({
                name: "Todo moved",
                message: "Todo moved successfully!",
                statusCode: 201,
              }),
            },
          },
        },
        "400": {
          description: "Properties are required!",
          content: {
            "application/json": {
              schema: messageCode({
                statusCode: 400,
                list: [
                  { name: "todoId", message: "TodoId is required!" },
                  {
                    name: "fromColumnId",
                    message: "fromColumnId is required!",
                  },
                  { name: "toColumnId", message: "toColumnId is required!" },
                ],
              }),
            },
          },
        },
      },
    },
  },
};

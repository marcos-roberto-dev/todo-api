import { OpenAPIV3 } from "openapi-types";
import { messageCode } from "../schemas/messageCode";
import { BoardModelDoc } from "../components/Board";

export const BoardPathDocs: OpenAPIV3.PathsObject = {
  "/board": {
    get: {
      tags: ["Board"],
      summary: "Listar todos os boards",
      description: "Essa rota lista todos os boards cadastrados.",
      responses: {
        "200": {
          description: "Ok",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Board",
                },
              },
            },
          },
        },
      },
    },
    post: {
      tags: ["Board"],
      summary: "Criar um novo Board",
      description: "Essa rota cria um novo Board.",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name"],
              properties: {
                name: {
                  type: "string",
                  example: "new project",
                  description: "Nome do Board",
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
                name: "new project",
                message: "Board created successfully!",
                statusCode: 201,
              }),
            },
          },
        },
        "400": {
          description: "Name is required!",
          content: {
            "application/json": {
              schema: messageCode({
                name: "name",
                message: "Name is required!",
                statusCode: 400,
                list: true,
              }),
            },
          },
        },
      },
    },
  },
  "/board/{id}": {
    get: {
      tags: ["Board"],
      summary: "Listar um board",
      description: "Essa rota lista um board específico.",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id do board",
          required: true,
          example: "board_id_mock_1",
        },
      ],
      responses: {
        "200": {
          description: "Ok",
          content: {
            "application/json": {
              schema: BoardModelDoc,
            },
          },
        },
      },
    },
  },
};

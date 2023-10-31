import { OpenAPIV3 } from "openapi-types";
import { messageCode } from "../schemas/messageCode";
import { BoardModelDoc } from "../components/Board";

export const BoardPathDocs: OpenAPIV3.PathsObject = {
  "/board": {
    get: {
      tags: ["Board"],
      summary: "List all boards",
      description: "This route lists all registered boards.",
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
      summary: "Create a new Board",
      description: "This route creates a new Board.",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name"],
              properties: {
                name: {
                  type: "string",
                  example: "new board",
                  description: "Name of the Board",
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
                name: "new board",
                message: "Board created successfully!",
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
                list: [{ name: "name", message: "Name is required!" }],
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
      summary: "List a board",
      description: "This route lists a specific board.",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Board Id",
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

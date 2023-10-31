import { OpenAPIV3 } from "openapi-types";
import { messageCode } from "../schemas/messageCode";
import { ColumnModelDoc } from "../components/Column";

export const ColumnPathDocs: OpenAPIV3.PathsObject = {
  "/column": {
    get: {
      tags: ["Column"],
      summary: "List all Columns",
      description: "This route lists all registered Columns.",
      responses: {
        "200": {
          description: "Ok",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Column",
                },
              },
            },
          },
        },
      },
    },
    post: {
      tags: ["Column"],
      summary: "Create a new Column",
      description: "This route creates a new Column.",
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
                  description: "Name of the Column",
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
                name: "new column",
                message: "Column created successfully!",
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
  "/column/{id}": {
    get: {
      tags: ["Column"],
      summary: "List a column",
      description: "This route lists a specific column.",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Board Id",
          required: true,
          example: "column_id_mock_1",
        },
      ],
      responses: {
        "200": {
          description: "Ok",
          content: {
            "application/json": {
              schema: ColumnModelDoc,
            },
          },
        },
      },
    },
  },
};

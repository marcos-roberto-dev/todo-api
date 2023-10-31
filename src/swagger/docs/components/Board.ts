import { OpenAPIV3 } from "openapi-types";

export const BoardModelDoc: OpenAPIV3.SchemaObject = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Id Board",
    },
    name: {
      type: "string",
      description: "Name Board",
    },
    description: {
      type: "string",
      description: "Description Board",
    },
    todosId: {
      type: "array",
      items: {
        type: "string",
      },
      description: "Id's of the Todos of the Board",
    },
    columnsId: {
      type: "array",
      items: {
        type: "string",
      },
      description: "Id's of the Columns of the Board",
    },
  },
};

import { OpenAPIV3 } from "openapi-types";

export const ColumnModelDoc: OpenAPIV3.SchemaObject = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Id Column",
    },
    name: {
      type: "string",
      description: "Name Column",
    },
    description: {
      type: "string",
      description: "Description Column",
    },
    todosId: {
      type: "array",
      items: {
        type: "string",
      },
      description: "Id's of the Todos of the Column",
    },
    boardId: {
      type: "object",
      description: "Id of the Board of the Column",
    },
  },
};

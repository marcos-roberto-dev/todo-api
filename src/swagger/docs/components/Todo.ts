import { OpenAPIV3 } from "openapi-types";

export const TodoModelDoc: OpenAPIV3.SchemaObject = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Id Todo",
    },
    name: {
      type: "string",
      description: "Name Todo",
    },
    description: {
      type: "string",
      description: "Description Todo",
    },
    columnId: {
      type: "array",
      items: {
        type: "string",
      },
      description: "Id of the Column of the Todo",
    },
    boardId: {
      type: "object",
      description: "Id of the Board of the Todo",
    },
  },
};

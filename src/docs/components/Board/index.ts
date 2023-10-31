import { OpenAPIV3 } from "openapi-types";

export const BoardModelDoc: OpenAPIV3.SchemaObject = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "ID do Board",
    },
    name: {
      type: "string",
      description: "Nome do Board",
    },
    description: {
      type: "string",
      description: "Descrição do Board",
    },
    todosId: {
      type: "array",
      items: {
        type: "string",
      },
      description: "Id das tarefas do Board",
    },
    columnsId: {
      type: "array",
      items: {
        type: "string",
      },
      description: "Id das colunas do Board",
    },
  },
};

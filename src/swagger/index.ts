import { OpenAPIV3 } from "openapi-types";
import { swaggerInfo } from "./docs/info";

import { BoardModelDoc } from "./docs/components/Board";
import { BoardPathDocs } from "./docs/paths/BoardPathDocs";

import { ColumnModelDoc } from "./docs/components/Column";
import { ColumnPathDocs } from "./docs/paths/ColumnPathDocs";

import { TodoModelDoc } from "./docs/components/Todo";
import { TodoPathDocs } from "./docs/paths/TodoPathDocs";

export const swaggerDocument: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: swaggerInfo,
  paths: {
    ...BoardPathDocs,
    ...ColumnPathDocs,
    ...TodoPathDocs,
  },
  components: {
    schemas: {
      Board: BoardModelDoc,
      Column: ColumnModelDoc,
      Todo: TodoModelDoc,
    },
  },
};

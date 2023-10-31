import { OpenAPIV3 } from "openapi-types";
import { swaggerInfo } from "./docs/info";
import { BoardModelDoc } from "./docs/components/Board";
import { BoardPathDocs } from "./docs/paths/BoardPathDocs";

export const swaggerDocument: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: swaggerInfo,
  paths: {
    ...BoardPathDocs,
  },
  components: {
    schemas: {
      Board: BoardModelDoc,
    },
  },
};

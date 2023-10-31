import { OpenAPIV3 } from "openapi-types";
import { swaggerInfo } from "../docs/info";
import { BoardModelDoc } from "../docs/components/Board";
import { BoardPathDocs } from "../docs/paths/BoardPathDocs";

export function processV3(doc: OpenAPIV3.Document) {
  doc.info = swaggerInfo;
  doc.paths = {
    ...BoardPathDocs,
  };
  doc.components = {
    schemas: {
      Board: BoardModelDoc,
    },
  };

  return doc;
}

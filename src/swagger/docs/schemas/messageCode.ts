import { OpenAPIV3 } from "openapi-types";

type ListMessages = {
  name: string;
  message: string;
};

interface CreateSuccess {
  name?: string;
  message?: string;
  statusCode: number;
  list?: ListMessages[];
}

export function messageCode({
  name,
  message,
  statusCode,
  list = [],
}: CreateSuccess): OpenAPIV3.SchemaObject {
  return {
    type: "object",
    properties: {
      data:
        list.length <= 0
          ? {
              type: "object",
              example: {
                name,
                message,
              },
            }
          : {
              type: "object",
              example: list,
            },
      statusCode: {
        type: "number",
        example: statusCode,
      },
    },
  };
}

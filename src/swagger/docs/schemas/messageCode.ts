import { OpenAPIV3 } from "openapi-types";

interface CreateSuccess {
  name: string;
  message: string;
  statusCode: number;
  list?: boolean;
}

export function messageCode({
  name,
  message,
  statusCode,
  list = false,
}: CreateSuccess): OpenAPIV3.SchemaObject {
  return {
    type: "object",
    properties: {
      data: !list
        ? {
            type: "object",
            properties: {
              name: {
                type: "string",
                example: name,
              },
              message: {
                type: "string",
                example: message,
              },
            },
          }
        : {
            type: "array",
            items: {
              properties: {
                name: {
                  type: "string",
                  example: name,
                },
                message: {
                  type: "string",
                  example: message,
                },
              },
            },
          },
      statusCode: {
        type: "number",
        example: statusCode,
      },
    },
  };
}

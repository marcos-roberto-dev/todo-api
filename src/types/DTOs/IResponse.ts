import { ErrorValidateData } from "../../validations/Validate";

export type MessageResponse = {
  result: ErrorValidateData[];
  statusCode: number;
};

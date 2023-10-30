import { ErrorValidateData } from "../../validations/Validate";

export type MessageResponse = {
  message: ErrorValidateData[];
  statusCode: number;
};

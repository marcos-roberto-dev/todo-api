import { ErrorValidateData } from "../../validations/Validate";

export type messageResponse = {
  message: ErrorValidateData[];
  statusCode: number;
};

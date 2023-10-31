import { ErrorValidateData } from "../../validations/Validate";

export type MessageResponse = {
  data: ErrorValidateData[];
  statusCode: number;
};

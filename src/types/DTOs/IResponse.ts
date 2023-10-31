import { ErrorValidateData } from "../../validations/Validate";

export type MessageResponse = {
  data: ErrorValidateData[] | ErrorValidateData;
  statusCode: number;
};

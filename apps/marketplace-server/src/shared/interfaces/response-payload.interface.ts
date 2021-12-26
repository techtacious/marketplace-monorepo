import { HttpStatusCodes } from "../enums/http-status-codes.enum";

export interface ResponsePayload {
  code: HttpStatusCodes;
  payload: any;
}

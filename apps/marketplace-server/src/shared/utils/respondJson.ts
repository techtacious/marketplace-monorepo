import { ResponsePayload } from "../interfaces/response-payload.interface";

export function respondJson(res, response: ResponsePayload) {
  res.status(response.code).json(response.payload);
}

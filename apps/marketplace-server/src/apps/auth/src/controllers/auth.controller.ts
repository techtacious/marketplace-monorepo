import { respondJson } from "@bu/shared";
import { AuthService } from "../services/auth.service";
export class AuthController {
  public static login = async (req: any, res: any, next: any) => {
    const { email, password } = req.query;
    const response = await AuthService.login(email, password);
    respondJson(res, response);
  };
}

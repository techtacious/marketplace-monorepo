import { apiPath } from "@bu/shared";
import got from "got";

export class UserService {
  private static readonly USER_ROUTE = "/user";

  public static async getUserByEmail(email: string): Promise<any> {
    try {
      const response = await got(`${apiPath}${this.USER_ROUTE}/email/${email}`);
      return Promise.resolve(JSON.parse(response.body));
    } catch (e) {
      return Promise.reject(e);
    }
  }
}

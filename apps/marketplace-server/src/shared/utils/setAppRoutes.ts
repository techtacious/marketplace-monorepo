import * as AuthRouter from "../../apps/auth/src/routes/auth.routes";
import * as UserRouter from "../../apps/user/src/routes/user.routes";

export function setAppRoutes(app) {
  app.use("/api/v1/auth", AuthRouter.router);
  app.use("/api/v1/user", UserRouter.router);
}

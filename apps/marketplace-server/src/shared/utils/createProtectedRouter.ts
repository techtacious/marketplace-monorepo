import { withJWTAuthMiddleware } from "express-kun";
import { Router } from "express";

export function createProtectedRouter(router: Router): Router {
  return withJWTAuthMiddleware(router, "yourSecretKey");
}

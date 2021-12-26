import { createProtectedRouter } from "@bu/shared";
import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

export const router = Router();

const protectedRouter = createProtectedRouter(router);

// router.route("/").post(AuthController.newUser);

router.route("/login").get(AuthController.login);

// protectedRouter.get("/", AuthController.list);

// protectedRouter.post("/update", AuthController.updateUser);

// protectedRouter.post("/setProfilePicture", AuthController.setProfilePhoto);

import { Request, Response, Router } from "express";
import { UserController } from "./controllers/UserController";

export const router = Router();

const controllerUser = new UserController();

router.get("/user", controllerUser.getUser)
// router.delete(`/user/:name`, controllerUser.deleteUser)
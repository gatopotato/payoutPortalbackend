import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("").post(registerUser);

export default userRouter;

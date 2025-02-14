import { Router } from "express";
import authController from "../controllers/auth.controller.js";


const authRouter = Router();

authRouter.route('/auth/login')
    .get(authController.login)
    .post(authController.loginPOST);

authRouter.route('/auth/register')
    .get(authController.register)
    .post(authController.registerPOST);

authRouter.route('/auth/logout')
    .get(authController.logout);

export default authRouter;
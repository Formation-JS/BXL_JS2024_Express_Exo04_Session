import { Router } from "express";
import errorController from "../controllers/error.controller.js";


const errorRouter = Router();

errorRouter.get('/error/forbidden', errorController.forbidden);

export default errorRouter;
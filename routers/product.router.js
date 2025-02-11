import { Router } from "express";
import productController from "../controllers/product.controller.js";


const productRouter = Router();

productRouter.get('/product', productController.index);
productRouter.get('/product/:id', productController.detail);


export default productRouter;
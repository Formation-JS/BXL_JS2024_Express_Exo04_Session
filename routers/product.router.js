import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { authorizeMiddleware } from "../middlewares/authorize.middleware.js";


const productRouter = Router();

//! Attention à l'ordre de déclaration des routes !
//? Une route à parametre (exemple « /:id ») bloquera les routes nommés
//? pour le même segment.
//? Sauf si le controller utilise la méthode « next() », pour permettre
//? au mécanisme de routing de continuer (Exemple dans la route "detail")

productRouter.get('/product', productController.index);
productRouter.get('/product/:id', authorizeMiddleware(), productController.detail);

productRouter.get('/product/add', authorizeMiddleware({ adminOnly: true }), productController.addGet);
productRouter.post('/product/add', authorizeMiddleware({ adminOnly: true }), productController.addPost);

// Ecriture alternative pour les 2 routes du formulaire
/*
productRouter.route('/product/add')
             .get(productController.addGet)
             .post(productController.addPost);
*/

export default productRouter;
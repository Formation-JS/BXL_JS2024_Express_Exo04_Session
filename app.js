import express from 'express';
import morgan from 'morgan';
import homeRouter from './routers/home.router.js';
import productRouter from './routers/product.router.js';
import authRouter from './routers/auth.router.js';

//! Récuperation des variables d'env
const { NODE_ENV, PORT } = process.env;

//! Création du serveur
const app = express();

//! Configuration
app.set('view engine', 'ejs');
app.set('views', './views');

//! App Middleware
// Logger
app.use(morgan('tiny'));
// Dossier public
app.use(express.static('public'));
// Gestion des formulaire
app.use(express.urlencoded({ extended: true }));

//! Routing
app.use(homeRouter);
app.use(productRouter);
app.use(authRouter);

//! Demarrage du serveur
app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT} [${NODE_ENV}]`);
})
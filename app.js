import express from 'express';
import morgan from 'morgan';
import session from 'express-session';

import homeRouter from './routers/home.router.js';
import productRouter from './routers/product.router.js';
import authRouter from './routers/auth.router.js';
import errorRouter from './routers/error.router.js';

//! Récuperation des variables d'env
const { NODE_ENV, PORT, SESSION_SECRET } = process.env;

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
// Session
app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: true
}));
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

//! Routing
app.use(homeRouter);
app.use(productRouter);
app.use(authRouter);
app.use(errorRouter);

//! Demarrage du serveur
app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT} [${NODE_ENV}]`);
})
import express from 'express';

const homeController = {
    /**
     * Index
     * @param {express.Request} req La requete
     * @param {express.Response} res La reponse
     */
    index: (req, res) => {
        res.render('home/index');
    },

    /**
     * About
     * @param {express.Request} req La requete
     * @param {express.Response} res La reponse
     */
    about: (req, res) => {
        res.render('home/about');
    }
};

export default homeController;
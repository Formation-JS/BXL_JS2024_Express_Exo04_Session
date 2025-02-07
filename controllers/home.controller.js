import express from 'express';

/**
 * @callback ExpressCallback
 * @param {express.Request} req
 * @param {express.Response} res
 */

/** 
 * Home Controller
 * @type {Object<string, ExpressCallback>}
 */
const homeController = {
    
    index: (req, res) => {
        res.render('home/index');
    },

    about: (req, res) => {
        res.render('home/about');
    }
};

export default homeController;
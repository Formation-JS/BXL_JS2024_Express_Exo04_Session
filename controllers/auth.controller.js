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
const authController = {

    login: (req, res) => {
        res.sendStatus(501);
    },
    loginPOST: (req, res) => {
        res.sendStatus(501);
    },

    register: (req, res) => {
        res.sendStatus(501);
    },
    registerPOST: (req, res) => {
        res.sendStatus(501);
    },

    logout: (req, res) => {
        res.sendStatus(501);
    }

};

export default authController;
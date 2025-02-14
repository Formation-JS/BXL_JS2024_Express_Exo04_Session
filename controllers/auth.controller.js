import express from 'express';
import memberService from '../services/member.service.js';

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
        res.render('auth/login', { error: undefined });
    },
    loginPOST: (req, res) => {
        //TODO Add validation

        try {
            const member = memberService.login(req.body);
            // TODO Session

            res.redirect('/');
        }
        catch {
            res.render('auth/login', { error: 'Crédential invalide !' });
        }
    },

    register: (req, res) => {
        res.render('auth/register', { error: undefined });
    },
    registerPOST: (req, res) => {
        //TODO Add validation

        try {
            const member = memberService.register(req.body);
            // TODO Session

            res.redirect('/');
        }
        catch {
            res.render('auth/register', { error: 'Données invalides !' });
        }
    },

    logout: (req, res) => {
        res.sendStatus(501);
    }

};

export default authController;
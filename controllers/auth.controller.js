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
            
            // Session
            req.session.member = {
                id : member.id,
                name: member.username,
                email: member.email
            };

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
            memberService.register(req.body);
            res.redirect('/login');
        }
        catch {
            res.render('auth/register', { error: 'Données invalides !' });
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }

};

export default authController;
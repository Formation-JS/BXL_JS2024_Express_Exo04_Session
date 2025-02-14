import express from 'express';

export const authorizeMiddleware = (option = { adminOnly: false }) => {

    /**
     * Authorize middleware
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     */
    return (req, res, next) => {

        if (!req.session.member) {
            res.redirect('/auth/login');
            return;
        }

        if(option.adminOnly && !req.session.member.isAdmin) {
            res.redirect('/error/forbidden');
            return;
        }

        next();
    }
}
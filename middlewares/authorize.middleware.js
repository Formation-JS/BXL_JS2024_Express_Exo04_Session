import express from 'express';

export const authorizeMiddleware = () => {

    /**
     * Authorize middleware
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     */
    return (req, res, next) => {

        if(!req.session.member) {
            res.redirect('/auth/login');
            return;
        }

        next();
    }
}
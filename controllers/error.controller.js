
const errorController = {

    forbidden: (req, res) => {
        res.render('error/forbidden');
    }

}

export default errorController;
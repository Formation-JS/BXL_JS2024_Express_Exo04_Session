import productService from "../services/product.service.js";


const productController = {

    index: (req, res) => {
        const products = productService.getAll();
        res.render('product/index', { products });
    },

    detail: (req, res, next) => {
        // ProductId depuis l'url
        const productId = parseInt(req.params.id);
        if(isNaN(productId)) {
            next();
            return;
        }

        // Récuperation du produit via le service
        const product = productService.getById(productId);

        //Render
        if(!product) {
            res.render('product/not-found');
            return;
        }
        res.render('product/detail', { product });
    },

    addGet: (req, res) => {
        res.render('product/form-add');
    },

    addPost: (req, res) => {
        //? Mode des bisounours... Pas de validation
        const product = req.body;

        // Ajout des données via le service
        const productId = productService.add(product);

        // Redirection vers la page detail du produit ajouté
        res.redirect(`/product/${productId}`);
    },
};

export default productController;
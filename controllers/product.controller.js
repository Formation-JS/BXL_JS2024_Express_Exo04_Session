import * as yup from 'yup';
import productService from "../services/product.service.js";

const productSchema = yup.object({
    name: yup.string()
        .required("Le nom du produit n'est pas optionnel !")
        .trim(),
    desc: yup.string()
        .notRequired()
        .trim()
        .test(d => d === '' || d.length >= 3 && d.length <= 500),
    price: yup.number().typeError('Veuillez encoder un nombre valide')
        .required()
        .positive(),
    soldePrice: yup.number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .notRequired()
        .positive(),
});

const productController = {

    index: (req, res) => {
        const products = productService.getAll();
        res.render('product/index', { products });
    },

    detail: (req, res, next) => {
        // ProductId depuis l'url
        const productId = parseInt(req.params.id);
        if (isNaN(productId)) {
            next();
            return;
        }

        // Récuperation du produit via le service
        const product = productService.getById(productId);

        //Render
        if (!product) {
            res.render('product/not-found');
            return;
        }
        res.render('product/detail', { product });
    },

    addGet: (req, res) => {

        const product = {
            name: 'Test',
            desc: '',
            price: '1',
            soldePrice: ''
        }

        res.render('product/form-add', { product });
    },

    addPost: async (req, res) => {
        // Validation avec "yup"
        let product;
        try {
            product = await productSchema.validate(req.body);
            console.log(product);
        }
        catch (e) {
            console.log(e);
            res.locals.error = e.message;

            res.render('product/form-add', { product: req.body });
            return;
        }

        // Ajout des données via le service
        const productId = productService.add(product);

        // Redirection vers la page detail du produit ajouté
        res.redirect(`/product/${productId}`);
    },
};

export default productController;


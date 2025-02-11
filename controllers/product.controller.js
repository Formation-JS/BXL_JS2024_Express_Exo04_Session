import productService from "../services/product.service.js";


const productController = {

    index: (req, res) => {
        const products = productService.getAll();
        res.render('product/index', { products });
    }

};

export default productController;
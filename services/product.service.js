import productModel from "../models/product.js";

const productService = {

    getAll: () => {
        const products = productModel.getAll()
                                     .map(p => ({
                                        id: p.id,
                                        name: p.name,
                                        price : p.soldePrice ?? p.price
                                     }));

        return products
    },

    getById : (productId) => {
        return productModel.getById(productId);
    },

    add: (product) => {
        const productAdded = productModel.add(product);
        return productAdded.id;
    }

};

export default productService;
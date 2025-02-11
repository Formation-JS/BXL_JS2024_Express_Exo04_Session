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
    }


};

export default productService;
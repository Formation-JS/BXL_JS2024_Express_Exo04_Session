const context = {
    products: [
        {
            id: 1,
            name: 'T-shirt en coton bio',
            desc: 'Un t-shirt confortable et respectueux de l\'environnement, parfait pour tous les jours.',
            price: 19.99,
            soldePrice: null
        },
        {
            id: 2,
            name: 'Jean slim fit',
            desc: 'Un jean tendance qui mettra votre silhouette en valeur.',
            price: 79.99,
            soldePrice: 59.99
        },
        {
            id: 3,
            name: 'Chaussures de course légères',
            desc: 'Des chaussures de sport performantes pour améliorer vos performances.',
            price: 99.99,
            soldePrice: null
        },
        {
            id: 4,
            name: 'Sac à dos imperméable',
            desc: 'Un sac à dos pratique et résistant pour transporter vos affaires en toute sécurité.',
            price: 39.99,
            soldePrice: 29.99
        },
        {
            id: 5,
            name: 'Montre connectée',
            desc: 'Une montre intelligente pour suivre votre activité et rester connecté.',
            price: 199.99,
            soldePrice: null
        }
    ],
    nextId: 6
};

const productModel = {

    getAll: () => {
        return structuredClone(context.products);
    },

    getById: (id) => {
        const product = context.products.find(p => p.id === id);

        return structuredClone(product);
    },

    add: ({ name, desc, price, soldePrice }) => {

        // Regle de validation dans la "Fake DB"
        if(!name?.trim() || isNaN(price)) {
            throw new Error('Insert fail !');
        }

        // Préparation de l'objet à ajouter
        const productNew = { 
            id: context.nextId,
            name, 
            desc, 
            price, 
            soldePrice
        };

        // Modification de la "Fake DB"
        context.nextId++;
        context.products.push(productNew);

        // Renvoi le produit ajouté à jours
        return structuredClone(productnew);
    },

    update: () => { throw new Error('Not implemented') },

    delete: () => { throw new Error('Not implemented') },
}

export default productModel;
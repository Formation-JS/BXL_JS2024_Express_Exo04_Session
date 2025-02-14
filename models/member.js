const context = {
    members: [
        {
            id: 1,
            username: 'della',
            password: 'Test1234=',
            email: 'della.duck@gmail.be',
            isAdmin: true
        },
        {
            id: 2,
            username: 'zaza',
            password: 'Test1234=',
            email: 'zaza.vanderquack@outlook.be',
            firstname: 'Zaza',
            lastname: 'Vanderquack',
            isAdmin: false
        }
    ],
    nextId: 3
};

const members = {
    getAll: () => { throw new Error('Not implemented') },

    getById: (id) => {
        return structuredClone(context.members.find(m => m.id === id))
    },

    getByUsername: (username) => {
        return structuredClone(context.members.find(m => m.username === username));
    },

    add: ({ username, email, firstname, lastname, password }) => {
        
        // Regle de validation dans la "Fake DB"
        if(!username?.trim() || !password?.trim() || !email?.trim()) {
            throw new Error('Insert fail !');
        }

        // Préparation de l'objet à ajouter
        const memberNew = { 
            id: context.nextId,
            username,
            email,
            password,
            firstname,
            lastname,
            isAdmin: false
        };

        // Modification de la "Fake DB"
        context.nextId++;
        context.members.push(memberNew);

        // Renvoi le produit ajouté à jours
        return structuredClone(memberNew);
    },

    update: () => { throw new Error('Not implemented') },

    delete: () => { throw new Error('Not implemented') },
};

export default members;
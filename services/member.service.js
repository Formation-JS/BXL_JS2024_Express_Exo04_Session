import members from "../models/member.js";

const memberService = {

    login: ({username, password}) => {

        if(!username || !password) {
            throw new Error('Invalide data !');
        }

        const member = members.getByUsername(username);
        if(!member) {
            throw new Error('User not found');
        }

        if(member.password !== password) {
            throw new Error("Invalid password");
        }

        return member;
    },

    register: (member) => {

        if(!username || !email || !password) {
            throw new Error('Invalide data !');
        }

        return members.add(member);
    }

};

export default memberService;
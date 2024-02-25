const { body } = require("express-validator");

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome é obrigatório.")
            .isLength({ min: 3 })
            .withMessage("O campo precisa ter no minimo 3 caracters."),
        body("email")
            .isString()
            .withMessage("O email é obrigatório.")
            .isEmail()
            .withMessage("Insira um email válido."),
        body("password")
            .isString()
            .withMessage("A senha é obrigatória.")
            .isLength({ min: 5 })
            .withMessage("O campo precisa ter no minimo 5 caracters."),
        body("confirmpassword")
            .isString()
            .withMessage("A confirmação de senha é obrigatória.")
            .custom((value, {req}) => {
                if(value != req.body.password) {
                    throw new Error("As senhas não são iguais.")
                }
                
                return true;
            }), 
    ];
};

module.exports = {
    userCreateValidation,
};
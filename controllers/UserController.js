const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
    

const jwtSecret = process.env.JWT_SECRET;

// generate user token
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {
        expiresIn: "7d",
    });
};

//  Register user and sign in 
const register = async (req, res) => {
    const {name, email, password} = req.body
    
    // check is user exists
    const user = await User.findOne({email})
    
    if(user) {
        res.status(422).json({erros: ["Por favor ultilize outro e-mail"]});
        
        return
    }
    
    // generate password hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    // create user
    const newUser = await User.create({
        name,
        email,
        password: passwordHash,
    });
    
    // if user was created sucessufully, return token
    if (!newUser) {
        res.status(422).json({erros: ["Houve um erro, por favor teente mais tartde"]})
    }
    
    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id),
    });
};  

module.exports = {
    register,
};
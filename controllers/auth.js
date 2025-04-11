const { create, findByUsername } = require("../repositories/users");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("../config");


exports.register = async(req, res, next) => {
    try {
        const { name, username, email, password } = req.body;
        // ? validation
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await create({ name, username, email, password: hashedPassword });

        const accessToken = jwt.sign({id: user.id, role: user.role}, config.auth.accessTokenKey, {
            expiresIn: config.auth.accessTokenExpireTime + 's'
        })

        const refreshToken = jwt.sign({id: user.id, role: user.role}, config.auth.refereshTokenKey, {
            expiresIn: config.auth.refereshTokenExpireTime + 's'
        })

        return res.status(201).json({message: 'user created!', accessToken, refreshToken, user});
    } 
    catch (error) {
        next(error);
        return res.status(500).json({message: `We have error 500 in register user`})
    }

}

exports.login = async(req, res, next) => {
    try {
        const {username, password} = req.body;
        console.log(username, password);
        const user = await findByUsername(username);
        if(!user) {
            return res.status(401).json({message: 'invalid identifire'});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(401).json({message: 'invalid identifire'})
        }

        const accessToken = jwt.sign({id: user.id, role: user.role}, config.auth.accessTokenKey, {
            expiresIn: config.auth.accessTokenExpireTime + 's'
        })

        const refreshToken = jwt.sign({id: user.id, role: user.role}, config.auth.refereshTokenKey, {
            expiresIn: config.auth.refereshTokenExpireTime + 's'
        });

        return res.status(200).json({message: "user loggined", user, accessToken, refreshToken})
    } 
    catch (error) {
        next(error);
        return res.status(500).json({message: `We have error 500 in login user`})
    }
}

exports.refresh = async(req, res, next) => {
    
}

exports.getMe = async(req, res, next) => {
    
}

exports.logout = async(req, res, next) => {
    
}
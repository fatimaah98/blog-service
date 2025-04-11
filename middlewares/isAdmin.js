const jwt = require('jsonwebtoken')
const config = require("../config")
module.exports = async(req, res, next) => {
    try {
        const accessToken = req.cookies['access-token'];
        if(accessToken) {
            const decode = jwt.verify(accessToken, config.auth.accessTokenKey);
            if(decode.role === 'admin') {
                req.user = decode;
                next()
            }
            else {
                return res.status(410).json({message: 'user not admin'})
            }
        }
        else {
            return res.status(410).json({message: 'user not admin : token not found'})
        }
    } 
    catch (error) {
        return res.status(410).json({message: 'user not admin : catch', error})
    }
}
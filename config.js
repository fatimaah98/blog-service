require("dotenv").config()

module.exports = {
    db: {
        uri: process.env.DB_URI,
        poolSize: process.env.DB_POOL || 10,
    },

    port: parseInt(process.env.PORT) || 4000,
    
    auth: {
        accessTokenExpireTime: process.env.ACCESS_TOKEN_EXPERTS_IN_SECONDS,
        refereshTokenExpireTime: process.env.REFERESH_TOKEN_EXPERTS_IN_SECONDS,
        accessTokenKey: process.env.ACCESS_TOKEN_SECRETkEY,
        refereshTokenKey: process.env.REFERESH_TOKEN_SECRETkEY,
    }
}
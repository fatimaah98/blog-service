require("dotenv").config()

module.exports = {
    db: {
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    },

    port: parseInt(process.env.PORT) || 4000,
    
    auth: {
        accessTokenExpireTime: process.env.ACCESS_TOKEN_EXPERTS_IN_SECONDS,
        refereshTokenExpireTime: process.env.REFERESH_TOKEN_EXPERTS_IN_SECONDS,
        accessTokenKey: process.env.ACCESS_TOKEN_SECRETkEY,
        refereshTokenKey: process.env.REFERESH_TOKEN_SECRETkEY,
    }
}
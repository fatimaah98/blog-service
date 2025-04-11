module.exports = (schema) => {
    return async(req, res, next) => {
        try {
            await schema.validate(req.body);
            next()
        } 
        catch (error) {
            return res.status(460).json({error, message: 'validation failed!'})
        }
    }
}
const yup = require('yup');

const registerSchema = yup.object().shape({
    name: yup.string().max(255).required(), 
    username: yup.string().matches(/^[a-zA-Z0-9_]+([._]?[a-zA-Z0-9]+)*$/, "username can only containes letters, numbers, dash").max(255).required(), 
    email: yup.string().email().max(255).required(), 
    password: yup.string().min(8).optional(),
    confirmPassword: yup.string().oneOf([yup.ref('password')])
});

module.exports = registerSchema
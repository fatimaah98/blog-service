const yup = require('yup');

const loginSchema = yup.object().shape({
    username: yup.string().matches(/^[a-zA-Z0-9_]+([._]?[a-zA-Z0-9]+)*$/, "username can only containes letters, numbers, dash").max(255).required(), 
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')])
});

module.exports = loginSchema
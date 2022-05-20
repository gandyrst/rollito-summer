const { response } = require("express");
const { validationResult } = require('express-validator');



const createUser = (req, res = response ) => {

    const { name, email, password } = req.body;

    //Control de errores
    const errors = validationResult( req );
    // if ( )
    console.log(errors);


    res.json({
        ok: true,
        msg: 'registro',
        name, 
        email,
        password
    })
}

const loginUser = (req, res = response) => {

    const { email, password } = req.body;


    res.json({
        ok: true,
        msg: 'renew',
        email,
        password
    })
}

const revalidarToken = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'login'
    })
}


module.exports = {
    createUser,
    revalidarToken,
    loginUser
}
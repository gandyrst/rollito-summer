/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, revalidarToken, loginUser } = require('../controllers/auth');




router.post(
    '/new',
    [ //middleware
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('name', 'El email es obligatorio').isEmail(),
        check('name', 'La contraseña debe ser de mínimo 6 caracteres').isLength({ min: 6 }),

    ],
     createUser );

router.post('/', revalidarToken);

router.get('/renew', loginUser);



module.exports = router;
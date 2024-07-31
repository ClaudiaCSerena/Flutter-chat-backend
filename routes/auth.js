/*

  path: /api/login

*/

const { Router } = require('express');
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Router para crear un nuevo usuario. Es una petición de tipo "post"
//El controlador se llama crearUsuario
router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    validarCampos
], crearUsuario);

//Router para hacer el login. Es una petición de tipo "post"
//El controlador se llama login
router.post('/', [
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
], login);

//Router para renovar el token. Es una petición "get"
router.get('/renew', validarJWT, renewToken);


module.exports = router;


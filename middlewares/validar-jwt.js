const jwt = require('jsonwebtoken');

//Función para validar el token. Es un middleware a utilizar en la ruta
const validarJWT = (req, res, next) => {

    //Leer token
    const token = req.header('x-token'); //leo el header "x-token"

    //Validar el token
    if(!token){ //si no ingresaron el token
        return res.status(401).json({
            ok: false,
            msg:'No hay token en la petición'
        });
    }
    try {

        const {uid} = jwt.verify( token, process.env.JWT_KEY);
        req.uid = uid;

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        })

    }

    

}

module.exports = {
    validarJWT
}
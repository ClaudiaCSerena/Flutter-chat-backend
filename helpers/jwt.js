const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

    return new Promise( (resolve, reject) => {

    const payload = { uid };

    jwt.sign( payload, process.env.JWT_KEY, {
        expiresIn: '24h' //para que el token deje de ser válido en 24 horas
    }, (err, token) => {
        if (err){
            //no se pudo crear el token
            reject('No se pudo generar el JWT');
        } else {
            //Token!!
            resolve(token);
        }
    }

  )

    });
}

module.exports = {
    generarJWT
}
const  Usuario = require('../models/usuario');
const  Mensaje = require('../models/mensaje');

//Función que se dispara cuando se conecta alguien
const usuarioConectado = async (uid = '') => {
    const usuario = await Usuario.findById(uid);
    usuario.online = true;
    await usuario.save(); //lo guardo en la base de datos

    return usuario;
}

//Función que se dispara cuando se desconecta alguien
const usuarioDesconectado = async (uid = '') => {
    const usuario = await Usuario.findById(uid);
    usuario.online = false;
    await usuario.save(); //lo guardo en la base de datos

    return usuario;
}

//Función para grabar los mensajes
const grabarMensaje = async () => {
    try {
        const mensaje = new Mensage(payload);
        await mensaje.save(); //guardo el mensaje en mi base de datos
        return true;
        
    } catch (error) {
        return false;
        
    }

}

module.exports = {
    usuarioConectado,
    usuarioDesconectado,
    grabarMensaje
}
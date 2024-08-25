const Mensaje = require('../models/mensaje');

//Función que permite retornar todos los mensajes:
const obtenerChat = async (req, res) => {

    const miId = req.uid;
    const mensajesDe = req.params.de;

    const last30 = await Mensaje.find({
        $or: [{ de: miId, para: mensajesDe}, {de: mensajesDe, para: miId}]
    })
    .sort({createdAt: 'desc'}) //ordeno descendentemente
    .limit(30); //los últimos 30

    res.json({
        ok: true,
        mensajes: last30
    })

}

module.exports = {
    obtenerChat
}
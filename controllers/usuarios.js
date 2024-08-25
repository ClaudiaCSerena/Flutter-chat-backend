const { response } = require('express');
const Usuario = require('../models/usuario');

const getUsuarios = async ( req, res = response ) => {

    const desde = Number( req.query.desde) || 0;

    const usuarios = await Usuario
    .find({_id: {$ne: req.uid}}) //busco todos menos el que se conectó
    .sort('-online') //los ordeno, 1ero salen los que están conectados
    .skip(desde) //a partir de esa posición del listado de usuarios
    .limit(20) //me muestra sólo 20 usuarios

    res.json({
        ok: true,
        usuarios,
        desde
    })

}

module.exports = {
    getUsuarios
}
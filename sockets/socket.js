const { comprobarJWT } = require('../helpers/jwt');
const { io } = require('../index');
const { usuarioConectado, usuarioDesconectado, grabarMensaje} = require('../controllers/socket');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    //client.handshake.headers['x-token'] = comunicación cliente-servidor

    //Para validad el JWT
    const [valido, uid] = comprobarJWT(client.handshake.headers['x-token'])
    console.log(valido, uid);

    //Verificar autenticación
    if ( !valido){
        return client.disconnect();
    }

    //Cliente autenticado
    usuarioConectado(uid);
    console.log('cliente autenticado')

    //Ingresar al usuario a una página en particular
    //Sala global: están todos los dispositivos conectados
    client.join(uid); //el nombre de la sala es mi uid, están ingresando a la sala al cliente con ese uid

    //Escuchar del cliente el mensaje personal
    client.on('mensaje-personal',async (payload) => {
        console.log(payload);
        await grabarMensaje(payload) //función que guarda el mensaje en mi base de datos
        io.to(payload.para).emit('mensaje-personal', payload);
    })

    client.on('disconnect', () => {
        usuarioDesconectado(uid);
        console.log('Cliente desconectado');
    });



});

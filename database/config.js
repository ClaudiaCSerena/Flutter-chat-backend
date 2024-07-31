const mongoose = require('mongoose') //se importa mongoose

//Función encargada de hacer la conexión:
const dbConnection = async() => {

    try {
        
       await mongoose.connect(process.env.DB_CNN); //Para conectarme a la base de datos
       console.log('DB online');

    } catch(error) {
        console.log(error);
        throw new Error('Error en la base de datos - Hable con el asministrador');
    }
}

//Para poder utilizar la función hay que exportarla:
module.exports = {
    dbConnection
}

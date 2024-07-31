const { Schema, model } = require('mongoose');

//El schema es cómo luce el modelo
const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    online: {
        type: Boolean,
        default: false
    },
});

//Método llamado toJSON
UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model( 'Usuario', UsuarioSchema);
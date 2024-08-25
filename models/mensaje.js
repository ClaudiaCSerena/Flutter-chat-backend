const { Schema, model } = require('mongoose');

//El schema es cómo luce el modelo
const MensajeSchema = Schema({

    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
);

//Método llamado toJSON
MensajeSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model( 'Mensaje', MensajeSchema);
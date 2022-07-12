import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    celular: {
        type: Number
    },
    contato: {
        type: Number
    },
    nascimento: {
        type: String
    },
    tags: [{
        type: String,
        required: true
    }],
    document: {
        type: String,
        required: true,
        trim: true
    },
    isAdm: {
        type: Boolean,
        required: true,
        default: false
    }
});

// Método deletar por Id
schema.statics.deleteById = function(_id) {
    return this.deleteOne({ _id: _id });
  };

export default mongoose.model('Customer', schema)
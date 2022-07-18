'use strict';

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true,
    },
    birthday:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: false
    },
    celular:{
        type: String,
        required: false
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
    addresses: [{
        cep: {
            type: String,
            required: true,
        },
        identificacao: {
            type: String,
            required: true,
            unique:true
        },
        logradouro: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true,
        },
        bairro: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true,
        },
        complemento: {
            type: String,
            required: false
        },
        referencia: {
            type: String,
            required: false
        }
    }],
    isAdmin: {
        type: Boolean,
        default: false

    }
});

// Método deletar por Id
schema.statics.deleteById = function(_id) {
    return this.deleteOne({ _id: _id });
  };

export default mongoose.model('User', schema);

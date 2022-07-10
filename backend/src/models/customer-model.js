'use strict';

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: false
    },
    cpf:{
        type: String,
        required: false
    },
    birthday:{
        type: Date,
        required: false
    },
    telefone:{
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    adresses: [{
        cep: {
            type: String,
            required: false,
        },
        identificacao: {
            type: String,
            required: false
        },
        logradouro: {
            type: String,
            required: false
        },
        numero: {
            type: Number,
            required: false,
        },
        bairro: {
            type: String,
            required: false
        },
        cidade: {
            type: String,
            required: false
        },
        estado: {
            type: String,
            required: false,
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

export default mongoose.model('Customer', schema);
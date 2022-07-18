'use strict';

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    number: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['Criado', 'A caminho', 'Entregue'],
        default: 'Criado'
    },
    payment:{
        type: String,
        required:true,
        enum: ['Card', 'Pix', 'Boleto'],
    },
    address: {
        type: String,
        required: true
    },
    frete: {
        option: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
    },
    items: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    total: {
        type: Number,
        required: true,
        default:0
    },
});

// Método deletar por Id
schema.statics.deleteById = function(_id) {
    return this.deleteOne({ _id: _id });
};

export default  mongoose.model('Order', schema);
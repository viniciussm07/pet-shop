import mongoose from "mongoose";

const Order = mongoose.model('Order');

const controller = {}

controller.get = async (req, res) => {
    try {
        const data = await Order.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
}

controller.post = async (req, res) => {
    try {
        const data = await Order.find();
        res.status(201).send({
            message:"Pedido realizado com sucesso!",
            data: data
        });
    } catch (error) {
        res.status(400).send({
            message:"Falha ao processar requisição!",
            data: error
        })
    }
}

export default controller;

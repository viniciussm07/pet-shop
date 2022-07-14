import  jwt  from "jsonwebtoken";
import mongoose from "mongoose";
import guid from "guid";

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


controller.getByCustomer = async (req, res) => {
    try {
        const data = await Order.find({customer: req.params.customer});
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
}


controller.getLastOrder = async (req, res) => {
    try {
        console.log(req.params);
        const data = await Order.findOne({customer: req.params.id});
        res.status(200).send({data});
    } catch (error) {
        res.status(400).send(error)
    }
}



controller.post = async (req, res) => {
    /*if (req.body.items.length === 0){
        return res.status(500).send({
            message:"Quantidade de items insuficiente",
        });
    }*/

    try {
        const  token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];
        const tokenData = jwt.verify(token, "mySecret");
        
        const data = {
            customer: tokenData.id,
            number: guid.raw().substring(0, 6),
            payment: req.body.payment,
            address: req.body.address,
            items: req.body.items,
        }

        var order = new Order(data);

        await order.save();

        res.status(201).send({
            message:"Pedido realizado com sucesso!",
            data: order
        });
    } catch (error) {
        res.status(500).send({
            message:"Falha ao processar requisição!",
            data: error
        })
    }
}

export default controller;

import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const Customer = mongoose.model('Customer');

const controller = {}

const secret = "mySecret";


controller.get = async (req, res) => {
    try {
        const data = await Customer.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
}

controller.register = async (req, res) => {
    
    const userExists = await Customer.findOne({email: req.body.email})

    if(userExists){
        return res.status(422).send({
            message: "Email já cadastrado.",
        })
    }

    const customer = new Customer(req.body);

    try {
        await customer.save();
        res.status(201).send({
            message: "Usuario cadastrado."
        })
    } catch (error) {
        res.status(400).send({
            message: "Falha no cadastro.",
            data: error
        })
    }
    


};

controller.login = async (req, res) => {
    const {email, senha} = req.body;
    Customer.findOne({email: email}, (err, user) => {
        if(err){
            console.log(err);
            res.status(200).json({erro: "Erro no servidor!"})
        }
        else if(!user){
            res.status(200).json({status:2, erro: "Email não confere!"})
        }
        else{
            const payload = {email};
            
            const token = jwt.sign(payload, secret, {
                expiresIn: '24h'
            })
            res.cookie('token', token, {httpOnly: true});
            res.status(200).json({status:1, auth:true, token:token, id:user._id, username:user.name});
        }
    })

   
    
    


};


controller.getById = async (req, res) => {
    try {
        const data = await Customer.findById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
}


controller.updateCustomer = async (req, res) => {
    try {
        await Customer.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                cpf:  req.body.cpf,
                birthday:  req.body.birthday,
                telefone:  req.body.telefone,
                email:  req.body.email,
                password: req.body.password,
                isAdmin: req.body.isAdmin,
            }
        });
        res.status(201).send({
            message: 'Usuario atualizado com sucesso!'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha na atualizacao.',
            data: error
        });
    }
};

controller.delete = async (req, res) => {
    try {
        await Customer.deleteById(req.params.id);
        res.status(200).send({
            message: 'Ususario deletado com sucesso!'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao deletar.',
            data: error
        });
    }
};

export default controller;
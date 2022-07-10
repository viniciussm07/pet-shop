import mongoose from "mongoose";

const Customer = mongoose.model('Customer');

const controller = {}

controller.get = async (req, res) => {
    try {
        const data = await Customer.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
}

controller.post = async (req, res) => {
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

controller.put = async (req, res) => {
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
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const User = mongoose.model('User');

const controller = {}

const secret = "mySecret";


controller.get = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
}

controller.register = async (req, res) => {

    const emailExists = await User.findOne({email: req.body.email});
    
    if(emailExists){
        return res.status(200).send({
            status:2,
            message: "Email já cadastrado.",
        })
    }
    

    const user = new User(req.body);

    try {
        await user.save();
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
    const {email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if(err){
            console.log(err);
            res.status(200).json({error: "Erro no servidor!"})
        }
        else if(!user){
            res.status(200).json({status:2, error: "Email não confere!"})
        }
        else{
            if(user.password !== password){
                res.status(200).json({status:2, error: "Senha não confere!"})
            }
            else{
                const payload = {email, id:user._id};
            
                const token = jwt.sign(payload, secret, {
                    expiresIn: '24h'
                })
                res.cookie('token', token, {httpOnly: true});
                res.status(200).json({status:1, auth:true, token:token, id:user._id, username:user.name, isAdmin:user.isAdmin});
            }
            
        }
    })

};


controller.checkToken = async (req, res) => {
    
    const  token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];

    if(token==null){
        res.json({status:404, message:"Não autorizado: Token inexistente!"});
    }
    else{
        jwt.verify(token, secret, (err, decoded)=>{
            if(err){
                res.json({status:401, message:"Não autorizado: Token inválido!"});
            }
            else{
                res.json({status:200});

            }
        })
    }


};



controller.destroyToken = async (req, res) => {
    const token = req.headers.token;

    if(token){
        res.cookie('token', null, {httpOnly: true});
    }
    else{
        res.status(401).send('Logout não autorizado');

    }
    res.send("Sessão finalizada com sucesso");


};


controller.getById = async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
}


controller.updateUser = async (req, res) => {
    
    try {
        await User.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                cpf:  req.body.cpf,
                birthday:  req.body.birthday,
                telefone:  req.body.telefone,
                celular: req.body.celular,
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


controller.getAddresses = async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        res.status(200).send(data.addresses);
    } catch (error) {
        res.status(400).send(error)
    }
}


controller.addAddress = async (req, res) => {
    const cepExists = await User.findOne({'addresses.cep': req.body.cep});
    const idExists = await User.findOne({'addresses.identificacao': req.body.identificacao});
    if(cepExists){
        return res.status(200).send({
            status:1,
            message: 'CEP já cadastrado!'
        });
    }

    if(idExists){
        return res.status(200).send({
            status:2,
            message: 'Identificador deve ser único!'
        });
    }

    try {
        await User.findByIdAndUpdate(req.params.id, {
            $addToSet: {
                addresses:{
                    cep:req.body.cep,
                    identificacao:req.body.identificacao,
                    logradouro:req.body.logradouro,
                    numero:req.body.numero,
                    bairro:req.body.bairro,
                    cidade:req.body.cidade,
                    estado:req.body.estado,
                    complemento:req.body.complemento,
                    referencia:req.body.referencia,
                }
                
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


controller.updateAddress = async (req, res) => {
    const idExists = await User.findOne({'addresses.identificacao': req.body.identificacao});
    if(idExists){
        return res.status(200).send({
            status:1,
            message: 'Identificador deve ser único!'
        });
    }

    try {
        await User.findOneAndUpdate({_id:req.params.id, 'addresses._id':req.body._id}, {
            $set: {
                'addresses.$':{
                    cep:req.body.cep,
                    identificacao:req.body.identificacao,
                    logradouro:req.body.logradouro,
                    numero:req.body.numero,
                    bairro:req.body.bairro,
                    cidade:req.body.cidade,
                    estado:req.body.estado,
                    complemento:req.body.complemento,
                    referencia:req.body.referencia,
                }
            }
        });
        res.status(201).send();
    } catch (error) {
        res.status(400).send({
            message: 'Falha na atualizacao.',
            data: error
        });
    }
}


controller.deleteAddress = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id,{
            $pull:{
                addresses:{
                    _id:req.body._id,
                }
            }
        });
        res.status(200).send({
            message: 'Endereço deletado com sucesso!'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao deletar.',
            data: error
        });
    }

}


controller.delete = async (req, res) => {
    try {
        await User.deleteById(req.params.id);
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
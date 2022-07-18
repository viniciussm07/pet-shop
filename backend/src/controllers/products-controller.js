import mongoose from "mongoose";

const Product = mongoose.model("Product");

const controller = {};

function verificaStock(num) {
  if (num > 0) return true 
  else return false 
}

controller.getActive = async (req, res) => {
  try {
    const data = await Product.find(
      { active: true },
      "_id title description price slug tags image stock"
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

controller.getAll = async (req, res) => {
  try {
    const data = await Product.find(
      {},
      "title price slug image active image stock"
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

controller.getBySlug = async (req, res) => {
  try {
    const data = await Product.findOne(
      { active: true, slug: req.params.slug },
      "_id title description price slug tags image stock"
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

controller.getById = async (req, res) => {
  try {
    const data = await Product.findById(
      req.params.id,
      "_id title slug price stock description image active tags"
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

controller.updateById = async (req, res) => {
  try {
    console.log(req.body)
    const data = await Product.findById(req.params.id);
    const newStock = data.stock - req.body.stock
    await Product.findByIdAndUpdate(req.params.id,{
      $set: {
        stock:newStock
      },
    });
    if(newStock ===0){
      await Product.findByIdAndUpdate(req.params.id,{
        $set: {
          active:false
        },
      });
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

controller.getByTag = async (req, res) => {
  try {
    const data = await Product.find(
      { active: true, tags: req.params.tag },
      "title description price slug tags image stock"
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

controller.post = async (req, res) => {
  try {
    const product = Product.create({
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      image: req.body.image
    })
    res.status(201).send({
      message: "Produto cadastrado.",
    });
  } catch (error) {
    res.status(400).send({
      message: "Falha no cadastro.",
      data: error,
    });
  }
};

controller.put = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        slug: req.body.slug,
        stock: req.body.stock,
        image: req.body.image,
        active: req.body.active
      },
    });
    res.status(201).send({
      message: "Produto atualizado com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Falha no cadastro.",
      data: error,
    });
  }
};

controller.delete = async (req, res) => {
  try {
    await Product.deleteById(req.params.id);
    res.status(200).send({
      message: "Produto deletado com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Falha ao deletar.",
      data: error,
    });
  }
};

export default controller;

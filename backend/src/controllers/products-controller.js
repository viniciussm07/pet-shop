import mongoose from "mongoose";

const Product = mongoose.model("Product");

const controller = {};

controller.getActive = async (req, res) => {
  try {
    const data = await Product.find(
      { active: true },
      "_id title description price slug tags image"
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
      "_id title description price slug tags image active tags image stock"
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
      "_id title description price slug tags image"
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

controller.getByTag = async (req, res) => {
  try {
    const data = await Product.find(
      { active: true, tags: req.params.tag },
      "title description price slug tags image"
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

// controller.getAllTags = async (req, res) => {
//   try {
//     const data = await Product.find(
//       { active: true },
//       "tags"
//     );
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// }

// 30:56
controller.post = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
  } catch (error) {
    res.status(400).send({
      message: "Falha no cadastro.",
      data: error,
    });
  }
  res.status(201).send({
    message: "Produto cadastrado.",
  });
};

controller.put = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        slug: req.body.slug,
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

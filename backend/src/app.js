import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

// Carrega os modelos
import Product from "./models/products-model.js";
import Customer from "./models/customer-model.js";

import indexRoute from './routes/index.js'
// Carrega a rota
import productRoute from './routes/product-route.js'
import mongoose from "mongoose"
import morgan from "morgan"

const app = express();
const router = express.Router();

// Conecta ao banco de dados
mongoose.connect("mongodb://localhost:27017/pet-shop")

// Necessário para a comunicação cross origin
app.use(cors());

// Converte os dados vindos do cliente
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Extensão para debug no terminal, nos mostra o código daq requisição pelo terminal
app.use(morgan("dev"));


app.use('/', productRoute);
// app.use('/products', productRoute);
app.use('/customer', customerRoute);

export default app;

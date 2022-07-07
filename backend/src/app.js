import express from "express"
import bodyParser from "body-parser";

import Product from "./models/products-model.js";

import indexRoute from './routes/index.js'
import productRoute from './routes/product-route.js'
import mongoose from "mongoose"

const app = express();

const router = express.Router();

mongoose.connect("mongodb+srv://admin:admin@cluster0.l036gtn.mongodb.net/test")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

export default app;
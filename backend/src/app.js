import express from "express"
import bodyParser from "body-parser";

import Product from "./models/products-model.js";
import Customer from "./models/customer-model.js";

import indexRoute from './routes/index.js'
import productRoute from './routes/product-route.js'
import customerRoute from './routes/customer-route.js'
import mongoose from "mongoose"

const app = express();
import cors from 'cors'

app.use(cors())

const router = express.Router();

mongoose.connect("mongodb+srv://admin:admin@mongodb")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customer', customerRoute);

export default app;

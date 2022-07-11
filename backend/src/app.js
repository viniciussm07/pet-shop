import express from "express"
import bodyParser from "body-parser";

import Product from "./models/products-model.js";
import Customer from "./models/customer-model.js";

import indexRoute from './routes/index.js'
import productRoute from './routes/product-route.js'
import customerRoute from './routes/customer-route.js'
import mongoose from "mongoose"
import cors from 'cors'

const app = express();
app.use(cors())

const router = express.Router();

mongoose.connect("mongodb+srv://erica_admin:X1jbf0uciDf6ZDFL@cluster0.x0dra.mongodb.net/?retryWrites=true&w=majority")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customer', customerRoute);

export default app;

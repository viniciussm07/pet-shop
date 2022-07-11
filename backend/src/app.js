import express from "express"
import bodyParser from "body-parser";

import Product from "./models/products-model.js";

import indexRoute from './routes/index.js'
import productRoute from './routes/product-route.js'
import mongoose from "mongoose"
import morgan from "morgan"
import cors from "cors"

const app = express();

const router = express.Router();

mongoose.connect("mongodb://localhost:27017/pet-shop")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use('/', productRoute);
// app.use('/products', productRoute);

export default app;

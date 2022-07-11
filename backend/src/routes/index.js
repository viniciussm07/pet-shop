import express from "express";
import produtRoute from "./product-route.js"

const router = express.Router();

const route = router.get('/', async (req, res) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.3"
    });
});

export default router;
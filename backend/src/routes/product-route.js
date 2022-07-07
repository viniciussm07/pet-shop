import express from "express";

import controller from "../controllers/products-controller.js";

const router = express.Router();

router.get('/', controller.get);

router.get('/:slug', controller.getBySlug);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

export default router;
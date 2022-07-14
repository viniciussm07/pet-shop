import express from "express";

import controller from "../controllers/products-controller.js";

const router = express.Router();

router.get('/', controller.getActive);

router.get('/:slug', controller.getBySlug);
router.get('/get/:id', controller.getById);

router.get('/tags/:tag', controller.getByTag);

router.post('/admin', controller.post);

router.put('/admin/:id', controller.put);

router.delete('/admin/:id', controller.delete);

export default router;
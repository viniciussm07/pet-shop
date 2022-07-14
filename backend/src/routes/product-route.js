import express from "express";

import controller from "../controllers/products-controller.js";

const router = express.Router();

router.get('/', controller.getActive);

router.get('/:slug', controller.getBySlug);

router.get('/tags/:tag', controller.getByTag);

// router.get('/tags', controller.getAllTags);

router.post('/admin', controller.post);

router.get('/admin/list', controller.getAll)

router.put('/admin/:id', controller.put);

router.delete('/admin/:id', controller.delete);

export default router;
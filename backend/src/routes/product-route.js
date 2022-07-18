import express from "express";
import multer from "multer";
import {teste} from '../config/multer.js'

import controller from "../controllers/products-controller.js";

const router = express.Router();

router.get('/', controller.getActive);
router.get('/:slug', controller.getBySlug);
router.get('/tags/:tag', controller.getByTag);

// router.post('/admin', multer(teste).single('file'), controller.post);
router.post('/admin', controller.post);
router.get('/admin/list', controller.getAll)
router.get('/admin/:id', controller.getById);
router.put('/admin/:id', controller.put);
router.put('/update/:id', controller.updateById);

router.delete('/admin/:id', controller.delete);

export default router;
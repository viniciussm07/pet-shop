import express from "express";

import controller from "../controllers/order-controller.js";

const router = express.Router();

router.get('/', controller.get);
router.get('/:customer', controller.getByCustomer);
router.post('/', controller.post);

export default router;
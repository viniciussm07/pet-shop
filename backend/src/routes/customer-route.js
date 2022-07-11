import express from "express";

import controller from "../controllers/customer-controller.js";

const router = express.Router();

router.get('/', controller.get);

router.get('/:id', controller.getById);

router.post('/auth/register', controller.register);
router.post('/auth/login', controller.login);

router.put('/:id', controller.updateCustomer);

router.delete('/:id', controller.delete);

export default router;
import express from "express";

import controller from "../controllers/user-controller.js";

const router = express.Router();

router.get('/', controller.get);
router.get('/:id', controller.getById);

router.post('/auth/register', controller.register);
router.post('/auth/login', controller.login);
router.get('/auth/checkToken', controller.checkToken);
router.get('/auth/destroyToken', controller.destroyToken);

router.put('/:id', controller.updateUser);
router.get('/address/:id', controller.getAddress);
router.post('/address/:id', controller.addAddress);
router.put('/address/:id', controller.deleteAddress);
router.put('/address/update/:id', controller.updateAddress);

router.delete('/:id', controller.delete);

export default router;
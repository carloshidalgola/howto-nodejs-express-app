const express = require('express');

const UserService = require('./../services/user-service');
//const validatorHandler = require('./../middlewares/validator-handler');
//const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product-dto');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

module.exports = router;

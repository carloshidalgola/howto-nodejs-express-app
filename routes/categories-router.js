const express = require('express');
const router = express.Router();

//http://localhost:3000/categories/1/products/200
router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const categoryId = req.params.categoryId;
  const productId = req.params.productId;

  res.json({
    categoryId: categoryId,
    productId: productId,
    name: 'Product 1',
    price: 2000
  });
});


module.exports = router;

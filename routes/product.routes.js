const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authBearer = require('../middlewares/auth.middleware'); // Panggil middleware

// Public Routes (Bisa diakses siapa saja)
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Protected Routes (Perlu Token) [cite: 107-109]
router.post('/', authBearer, productController.createProduct);
router.put('/:id', authBearer, productController.updateProduct);
router.delete('/:id', authBearer, productController.deleteProduct);

module.exports = router;
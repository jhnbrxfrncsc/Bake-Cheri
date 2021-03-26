import express from 'express';

import { getData, getProducts, createProduct, getProduct } from '../controller/appController.js';

const router = express.Router();

router.get('/', getData);

router.get('/api/products', getProducts);

router.post('/products', createProduct);

router.get('/products', getProduct);

export default router;
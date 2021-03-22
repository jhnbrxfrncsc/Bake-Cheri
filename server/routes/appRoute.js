import express from 'express';

import { getData, getProducts } from '../controller/appController.js';

const router = express.Router();

router.get('/', getData);

router.get('/api/products', getProducts);

router.get('/services', (req, res) => {
    res.send('<h1> Services </h1>');
});

export default router;
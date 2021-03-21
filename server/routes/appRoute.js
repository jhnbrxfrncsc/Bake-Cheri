import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    res.send('index');
});

router.get('/about', (req, res) => {
    res.send('<h1> About Me </h1>');
});

router.get('/services', (req, res) => {
    res.send('<h1> Services </h1>');
});

export default router;
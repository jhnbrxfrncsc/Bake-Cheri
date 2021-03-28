import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import appRoutes from './routes/appRoute.js';

const app = express();
dotenv.config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const DBURI = process.env.DBURI;

mongoose.connect(DBURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then((req, res) => {
        console.log("DB Connected.");
        app.listen(PORT, () => {
            console.log(`server is listening on ${HOST}:${PORT}`);
        }); 
    })
    .catch(err => console.log(err.message));

// Middlewares
app.use(express.static('public'));
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


// routes
app.use('/', appRoutes);
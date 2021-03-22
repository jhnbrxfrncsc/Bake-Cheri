import mongoose from 'mongoose';

const dataSchema = mongoose.Schema({
    products: {
        name: String,
        image: String,
        price: Number,
        category: [String]
    }
}, { timestamps: true });
import mongoose from 'mongoose';

const dataSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    category: [String]
}, 
// { timestamps: true }
);


const PostProduct = mongoose.model('products', dataSchema);

export default PostProduct;
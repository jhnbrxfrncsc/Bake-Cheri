import mongoose from 'mongoose';

const dataSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    category: [String]
}, 
// { timestamps: true }
);


const PostProduct = mongoose.model('PostProduct', dataSchema);

export default PostProduct;
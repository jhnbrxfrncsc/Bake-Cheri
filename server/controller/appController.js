import PostProduct from '../model/appSchema.js';
import menuData from '../menuData.js';

export const getData = (req, res) => {
    res.send('index1');
}

export const getProducts = (req, res) => {
    res.send(menuData);
}

export const getProduct = async (req, res) => {
    try {
        const products = await PostProduct.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createProduct = async(req, res) => {
    const { name, image, price, category } = req.body;
    console.log(name, price, category);
    const newProduct = new PostProduct({name, image, price, category});
    try {
        await newProduct.save();
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

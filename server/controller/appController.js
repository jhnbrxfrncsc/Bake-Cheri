import menuData from '../menuData.js';

export const getData = (req, res) => {
    res.send('index1');
}
export const getProducts = (req, res) => {
    res.send(menuData);
}
import * as api from '../../api/api';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();

        dispatch({ type : "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}

export const postProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product);
        console.log(data)
        dispatch({ type : "CREATE_PRODUCT", payload: data });
    } catch (error) {
        console.log(error.message)    
    }
}
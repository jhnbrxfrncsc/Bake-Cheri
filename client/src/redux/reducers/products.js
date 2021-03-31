

const reducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            state = action.payload;
            return state;

        case "CREATE_PRODUCT":
            return [...state, action.payload];
        default:
            return state;
    }
}

export default reducer;
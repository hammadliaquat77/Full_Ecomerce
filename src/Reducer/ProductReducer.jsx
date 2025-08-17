const ProductsReducer = (state, action) => {
    if (action.type === "SET_LOADIND") {
        return {
            ...state,
            isLoading: true,
        };
    };

    if (action.type === "API_ERROR") {
        return {
            ...state,
            isLoading: false,
            isError: true,
        }
    };

    if (action.type === "MY_API_DATA") {
        const featuredData = action.payload.filter((currentVal) => {
            return currentVal.featured === true;
        })
        return {
            ...state,
            isLoading: false,
            isError: false,
            products: action.payload,
            featureProduct: featuredData,
        }
    }

};

export default ProductsReducer
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

    if (action.type === "SET_API_DATA") {
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


// single product data
        if (action.type === "SET_SINGLE_LOADIND") {
        return {
            ...state,
            isSingleLoading: true,
        };
    };

    if (action.type === "SET_SINGLE_PRODUCT") {
        return {
            ...state,
            isSingleLoading: false,
            singleProduct: action.payload
        };
    };

    if (action.type === "SET_SINGEL_ERROR") {
        return {
            ...state,
            isSingleLoading: false,
            isError: true,
        }
    };
};

export default ProductsReducer
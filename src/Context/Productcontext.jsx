import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer"

const AppContext = createContext()

const API = "https://api.pujakaitem.com/api/products";

const initailState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProduct: [],
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initailState)

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADIND" })
        try {
            const res = await axios.get(url);
            const Products = await res.data
            // console.log(Products);
            dispatch({ type: "MY_API_DATA", payload: Products })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }

    }

    useEffect(() => {
        getProducts(API)
    }, [])


    return <AppContext.Provider value={{ ...state }}>
        {children}
    </AppContext.Provider>
}


export { AppProvider, AppContext }
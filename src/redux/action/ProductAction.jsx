import { ActionTypes } from "../contant/Action-type"




export const setproduct = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
}
}

export const selectProduct = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
}
}

export const removeSelectProduct = (product) =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product,
}
}

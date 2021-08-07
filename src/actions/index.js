import * as types from './../constants/ActionType'

export const actAddToCart = (product, qty) => {
        return {
            type: types.ADD_TO_CART,
            product,
            qty
        }
}

export const actChangeMessage = (message) => {
    return{
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const actRemoveProductInCart = (product) => {
    return{
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, qty) => {
    return{
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        qty
    }
}
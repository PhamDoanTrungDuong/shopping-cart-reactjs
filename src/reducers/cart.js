import * as types from "./../constants/ActionType"

var data = JSON.parse(localStorage.getItem('CART'));

var initState = data ? data : [];

const cart = (state = initState, action) => {
    var{product, qty} = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].qty += qty
            }else{
                state.push({
                    product,
                    qty
                });
            }
           localStorage.setItem('CART', JSON.stringify(state));
           return[...state]


        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return[...state]

        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].qty = qty;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return[...state]

        default : return [...state];
    }

}


var findProductInCart = (cart, product) => {
        var index = -1;
        if(cart.length > 0){
            for(var i=0; i<cart.length; i++){
                if(cart[i].product.id === product.id){
                    index = i;
                    break;
                }
            }
        }
        return index
}

export default cart;
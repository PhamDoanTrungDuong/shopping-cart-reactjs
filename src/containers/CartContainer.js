import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "./../components/Cart";
import * as Message from "./../constants/Message";
import CartItem from "./../components/CartItem";
import CartResult from "../components/CartResult";
import {actRemoveProductInCart, actChangeMessage, actUpdateProductInCart} from './../actions/index'

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    //console.log(cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }

  showCartItem = (cart) => {
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props
    var result = <tr>
      <td>{Message.MSG_CART_EMPTY} </td>
    </tr>
    if (cart.length > 0) {
      result = cart.map((item, index) => {
          return <CartItem 
                    item={item} 
                    key={index} 
                    onDeleteProductInCart = { onDeleteProductInCart } 
                    onChangeMessage = {onChangeMessage}
                    onUpdateProductInCart = {onUpdateProductInCart}
                />;
      });
    }
    return result;
  };

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart = {cart} />;
    }
    return result;
  };
}

//Check PropsTypes
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      qty: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteProductInCart : PropTypes.func.isRequired,
  onChangeMessage : PropTypes.func.isRequired,
  onUpdateProductInCart : PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actRemoveProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart: (product, qty) => {
      dispatch(actUpdateProductInCart(product, qty));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

import React, { Component } from "react";
import * as Message from './../constants/Message'

class CartItem extends Component {
  render() {
      var { item } = this.props;
      var { qty } = item;
     // console.log(qty);
    return (
      <tr>
        <th scope="row">
          <img
            src={ item.product.image }
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{ item.product.name }</strong>
          </h5>
        </td>
        <td>{ item.product.price }$</td>
        <td className="center-on-small-only">
          <span className="qty">{ qty }  </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick = { () => this.onUpdateQty(item.product, item.qty-1) }
              className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
            >
              <a href="true">—</a>
            </label>
            <label
              onClick = { () => this.onUpdateQty(item.product, item.qty+1) }
              className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
            >
              <a href="true">+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.qty) }$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick = { () => this.onDelete(item.product) }
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  showSubTotal = (price, qty) => { 
    return price * qty;
  }

  onDelete = (product) => {
      var {onDeleteProductInCart, onChangeMessage} = this.props;
      onDeleteProductInCart(product);
      onChangeMessage(Message.MSG_DELTE_PRODUCT_IN_CART_SUCCESS);
  }

  onUpdateQty = (product, qty) => {
    var {onUpdateProductInCart,onChangeMessage} = this.props;
    if(qty > 0){
      onUpdateProductInCart(product, qty);
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  }
}

export default CartItem;

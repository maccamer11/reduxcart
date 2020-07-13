import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from 'react-redux';
import { CLEAR_CART, GET_TOTALS } from '../actions';

//connect 

// cart prop here is what makes it work
//dispatch is given to us by mapstatetoprops
const CartContainer = ({ cart = [], total, dispatch }) => {

  useEffect(() => {
    dispatch({ type: GET_TOTALS })
  })

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch({ type: CLEAR_CART })}>clear cart</button>
      </footer>
    </section>
  );
};

//anything is shown to use that the variable name here does not matter
const mapStateToProps = (anything) => {
  return { cart: anything.cart, total: anything.total }
}

export default connect(mapStateToProps)(CartContainer);

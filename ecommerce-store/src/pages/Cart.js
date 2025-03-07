import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css"; // Add CSS for styling

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart.</p> : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name} - ${item.price}</span>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

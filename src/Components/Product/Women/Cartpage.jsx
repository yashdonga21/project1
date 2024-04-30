import React from 'react';
import './Cartpage.css';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Ensure each item has a quantity property initialized to 1
    const updatedCartItems = storedCartItems.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCartItems(updatedCartItems);
  }, []);

  const updateCart = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.MRP * item.quantity, 0);
  };

  return (
    <div className="cart-page container mt-5">
      <h1>Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item d-flex align-items-center justify-content-between">
          <div className="img">
            <img src={item.img} alt="" />
          </div>
          <div className="item-details">
            <h3 className=''>{item.title}</h3>
            <p>Price: ₹{item.MRP}</p>
          </div>
          <div className="item-controls">
            <button className="quantity-control" onClick={() => updateCart(item.id, item.quantity - 1)}>-</button>
            <span className="quantity">{item.quantity}</span>
            <button className="quantity-control" onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="total-section">
          <h2>Total price: ₹{getTotalPrice()}</h2>
          <Link to={'/Pay'}>
            <button className="checkout-button">Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}
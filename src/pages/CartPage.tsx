import { useCart } from '../contexts/CartContext';
import { CartItemComponent } from '../components/CartItem';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-empty">
        <h2>Your cart is empty.</h2>
        <Link to="/" className="btn-back-to-shopping">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItemComponent key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${getCartTotal()}</h2>
        <button className="btn-checkout">Proceed to Checkout</button>
        <button onClick={clearCart} className="btn-clear-cart">Clear Cart</button>
      </div>
    </div>
  );
};
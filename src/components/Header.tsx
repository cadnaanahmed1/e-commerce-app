import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export const Header = () => {
  const { getCartItemCount } = useCart();

  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/" className="logo">
          ShopHub
        </Link>
        <nav className="main-nav">
          <Link to="/cart" className="cart-link">
            Cart ({getCartItemCount()})
          </Link>
        </nav>
      </div>
    </header>
  );
};
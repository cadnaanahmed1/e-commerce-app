import type { CartItem } from '../types';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: CartItem;
}

export const CartItemComponent = ({ item }: CartItemProps) => {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>${item.price} x {item.quantity}</p>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="btn-remove">
        Remove
      </button>
    </div>
  );
};
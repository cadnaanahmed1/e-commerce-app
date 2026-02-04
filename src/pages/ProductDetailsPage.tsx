import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Link removed
import { fetchProductById } from '../utils/api';
import { Spinner } from '../components/Spinner';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../types';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id!);
        setProduct(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <Spinner />;
  if (error || !product) return <p className="error-message">Product not found.</p>;

  return (
    <div className="product-details-page">
      <img src={product.image} alt={product.title} className="product-details-image" />
      <div className="product-details-info">
        <h1>{product.title}</h1>
        <p className="product-details-price">${product.price}</p>
        <p className="product-details-description">{product.description}</p>
        <button onClick={() => addToCart(product)} className="btn-add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

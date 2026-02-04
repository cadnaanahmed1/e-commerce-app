import { ProductCard } from './ProductCard';
import type { Product } from '../types';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => (
  <div className="product-grid">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
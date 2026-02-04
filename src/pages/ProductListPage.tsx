import { useState, useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductList } from '../components/ProductList';
import { Spinner } from '../components/Spinner';

export const ProductListPage = () => {
  const { products, categories, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  if (loading) return <Spinner />;
  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <div className="product-list-page">
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="category-select">
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};
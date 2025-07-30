import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { fetchProducts, Product } from '../services/api';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data.slice(0, 6)); 
        setError(null);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleButtonClick = () => {
    alert(`Hello from ${currentTheme.name} theme!`);
  };

  return (
    <div className="space-y-8">
 
      <div className="text-center">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-300"
          style={{
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.primary,
            fontWeight: currentTheme.fonts.weight.bold,
          }}
        >
          Welcome Home
        </h1>
        <p 
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{
            color: currentTheme.colors.textSecondary,
            fontFamily: currentTheme.fonts.secondary,
          }}
        >
          Experience the power of dynamic theming with our Multi-Theme Switcher App. 
          Each theme transforms not just colors, but the entire layout and typography.
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={handleButtonClick}
          className="px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          style={{
            backgroundColor: currentTheme.colors.primary,
            color: currentTheme.colors.surface,
            fontFamily: currentTheme.fonts.secondary,
            fontWeight: currentTheme.fonts.weight.medium,
            borderRadius: currentTheme.borderRadius,
            boxShadow: currentTheme.shadows.md,
          }}
        >
          Try {currentTheme.name} Theme
        </button>
      </div>

      <div>
        <h2 
          className="text-2xl font-bold mb-6"
          style={{
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.primary,
            fontWeight: currentTheme.fonts.weight.bold,
          }}
        >
          Featured Products
        </h2>

        {loading && (
          <div className="text-center py-8">
            <div 
              className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-current border-r-transparent"
              style={{ color: currentTheme.colors.primary }}
            />
            <p 
              className="mt-2"
              style={{ 
                color: currentTheme.colors.textSecondary,
                fontFamily: currentTheme.fonts.secondary,
              }}
            >
              Loading products...
            </p>
          </div>
        )}

        {error && (
          <div 
            className="text-center py-8 px-4 rounded-lg"
            style={{ 
              backgroundColor: '#fef2f2',
              color: '#dc2626',
              borderRadius: currentTheme.borderRadius,
            }}
          >
            <p className="font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className={`grid gap-6 ${
            currentTheme.layout === 'cards' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : currentTheme.layout === 'sidebar'
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {products.map((product) => (
              <div
                key={product.id}
                className="group transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: currentTheme.colors.surface,
                  borderRadius: currentTheme.borderRadius,
                  boxShadow: currentTheme.shadows.md,
                  border: `1px solid ${currentTheme.colors.border}`,
                }}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden" style={{ borderRadius: `${currentTheme.borderRadius} ${currentTheme.borderRadius} 0 0` }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 
                    className="font-bold mb-2 line-clamp-2"
                    style={{
                      color: currentTheme.colors.text,
                      fontFamily: currentTheme.fonts.secondary,
                      fontWeight: currentTheme.fonts.weight.bold,
                    }}
                  >
                    {product.title}
                  </h3>
                  <p 
                    className="text-sm mb-3 line-clamp-3"
                    style={{
                      color: currentTheme.colors.textSecondary,
                      fontFamily: currentTheme.fonts.secondary,
                    }}
                  >
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span 
                      className="text-xl font-bold"
                      style={{
                        color: currentTheme.colors.primary,
                        fontFamily: currentTheme.fonts.primary,
                        fontWeight: currentTheme.fonts.weight.bold,
                      }}
                    >
                      ${product.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span 
                        className="text-sm"
                        style={{ 
                          color: currentTheme.colors.textSecondary,
                          fontFamily: currentTheme.fonts.secondary,
                        }}
                      >
                        {product.rating.rate} ({product.rating.count})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div 
        className="p-6 rounded-lg"
        style={{
          backgroundColor: currentTheme.colors.surface,
          border: `1px solid ${currentTheme.colors.border}`,
          borderRadius: currentTheme.borderRadius,
        }}
      >
        <h3 
          className="text-lg font-bold mb-3"
          style={{
            color: currentTheme.colors.primary,
            fontFamily: currentTheme.fonts.primary,
            fontWeight: currentTheme.fonts.weight.bold,
          }}
        >
          Current Theme: {currentTheme.name}
        </h3>
        <ul 
          className="space-y-2 text-sm"
          style={{
            color: currentTheme.colors.textSecondary,
            fontFamily: currentTheme.fonts.secondary,
          }}
        >
          <li>• Layout: {currentTheme.layout}</li>
          <li>• Primary Font: {currentTheme.fonts.primary.split(',')[0].replace(/"/g, '')}</li>
          <li>• Primary Color: {currentTheme.colors.primary}</li>
          <li>• Background: {currentTheme.colors.background}</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
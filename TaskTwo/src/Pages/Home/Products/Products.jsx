import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-3">
        <h3 className="text-2xl font-bold text-orange-600">Products</h3>
        <h3 className="text-3xl font-bold">Our new Collections</h3>
        <p className="mb-5">
          Our latest collection, imported from china,You can order and try for a
          fashion Boom
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

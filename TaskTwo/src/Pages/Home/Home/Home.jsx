import React from 'react';
import Hero from '../../../Shared/Hero';
import Products from '../Products/Products';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';

const Home = () => {
  const newPds = useLoaderData();

  return (
    <>
      <div className="p-5">
        <Hero />

        <Products />

        <div>
          <div className="text-center mt-3">
            <h3 className="text-2xl font-bold text-orange-600">New Arrival</h3>
            <h3 className="text-3xl font-bold">From Our Choice</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {newPds.map((newPd) => (
              <ProductCard key={newPd._id} product={newPd}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

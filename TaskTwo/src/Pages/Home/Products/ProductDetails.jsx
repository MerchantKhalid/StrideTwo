import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, title, img, price, description } = product;

  return (
    <div className="p-5">
      <div className="card p-5 glass">
        <figure className="mt-5">
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <h2 className="font-bold">Price:${price} </h2>
          <p className="font-semibold">{description}</p>
          <div className="card-actions">
            <button className="btn btn-warning">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

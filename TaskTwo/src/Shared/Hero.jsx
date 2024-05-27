import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://tse1.mm.bing.net/th?id=OIP.hfhqIygtwsm0NsP_3ZlxTQHaEo&pid=Api&P=0&h=180)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Stride Two</h1>
          <p className="mb-5">
            Its a practise project for Stride Two by Programming Hero
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

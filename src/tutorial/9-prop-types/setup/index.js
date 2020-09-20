import React, { useState, useEffect } from 'react';
import Product from './Product';
const url = 'https://course-api.netlify.app/api/react-prop-types-example';
const Index = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;

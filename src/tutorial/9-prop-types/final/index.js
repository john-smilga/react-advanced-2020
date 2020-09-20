import React, { useState, useEffect } from 'react';
import Product from './Product';
import defaultImage from '../../../assets/default-image.jpeg';
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
      {/* <img src={defaultImage} alt='' /> */}
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;

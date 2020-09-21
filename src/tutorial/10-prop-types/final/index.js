import React, { useState, useEffect } from 'react';
import Product from './Product';
import defaultImage from '../../../assets/default-image.jpeg';
import { useFetch } from '../../9-custom-hooks/final/2-useFecth';

const url = 'https://course-api.netlify.app/api/react-prop-types-example';
const Index = () => {
  const { products } = useFetch(url);
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

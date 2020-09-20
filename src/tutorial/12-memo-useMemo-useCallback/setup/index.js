import React, { useState, useEffect, useCallback, useMemo } from 'react';
const url = 'https://course-api.netlify.app/api/javascript-store-products';
// every time props or state changes, component re-renders

const Index = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>

      <BigList products={products} />
    </>
  );
};

const BigList = ({ products }) => {
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </section>
  );
};

const SingleProduct = ({ fields }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
export default Index;

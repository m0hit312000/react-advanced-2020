import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const calculateMOstExpensive = (data) => {
  console.log('hello');
  return data.reduce((total, item) => {
    const price = item.fields.price;
    if(price >= total) {
      total = price; 
    }
    return total;  
  }, 0) / 100
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(() => calculateMOstExpensive(products), [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ mariginTop: '3rem' }}>cart: {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart}/>
    </>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('Calling Single item');
  });
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart} />
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </article>
  )
}
export default Index

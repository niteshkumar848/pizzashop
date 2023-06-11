import React, { useState, useEffect } from 'react'
//import Product from './Product';

export default function Products1() {

  const [Products, setProducts] = useState([]);

  useEffect(() => {
      fetch('/api/products')
      .then(response =>  response.json())
      .then(products => {
       setProducts(products);
      })
  }, [])


  return (
    <div className='container mx-auto pb-24'>
      <h1 className='text-lg font-bold my-8'>   Products1 </h1>
      <div className='grid grid-cols-5 my-8 gap-24'>
        {
          Products.map(Product =>  <Product/>)
        }
        
       
      </div>
    </div>
  )
}

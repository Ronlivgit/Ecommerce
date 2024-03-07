
import React, { useEffect, useState } from 'react';
import ReviewSlider from '../../components/slider/Slider'; 
import '../home/Home.css';
import ProductCard from '../../components/protuctCard/ProductCard';
import { APIBaseUrl } from '../../config/Api';
export default function HomePage() {

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});


  const fetchAllProducts = async () => {
    try {
      const res = await fetch(`${APIBaseUrl}/Product`);
      const data = await res.json();
      setProducts(data);
      
    } catch (error) {
      console.log("error fatcing Products: ",error);
      
    }

  };

  useEffect(() => {
    fetchAllProducts()
  }, []);

  return (
    <>
    <div>
      <div className='productsContainer'>
      {products.map((product) => (
      <ProductCard 
        key={product.id} 
        product={product} 
      />
    ))}
    </div>
      <h2>Customer Reviews</h2>
      <ReviewSlider />
    </div>
    </>
  );
}




















// import React from 'react'

// export default function () {
//   return (
//     <div>home</div>
//   )
// }

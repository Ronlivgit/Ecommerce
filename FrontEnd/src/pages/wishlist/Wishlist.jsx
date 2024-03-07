import React, { useState, useEffect } from "react";
import PayPalPayment from "../../components/PayPalPayment";


const faveURL = 'http://localhost:3000/api/favorite'
export default function Wishlist() {

  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchProducts = async () => {
    try {
      const response = await fetch(faveURL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (


    <div style={{ display: "flex", flexWrap: "wrap", padding: "10rem" }}>
      {products.map((prod, index) => (
        <div key={index} className="product-card">
          <h2>{prod.name}</h2>
          <p>{prod.description}</p>
          <p>${prod.price}</p>
          {prod.image && (
            <img
              src={prod.image}
              alt={prod.name}
              style={{ width: "100px", height: "100px" }}
            />
          )}
          <br />

          <button onClick={() => addToBasket(prod._id)}>Add to Basket</button>
        </div>
      ))}
      {/* yizak worked down here doesnt finish */}
      <PayPalPayment />
    </div>


  );


}

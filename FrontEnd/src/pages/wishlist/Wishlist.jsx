import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const faveURL = 'http://localhost:3000/api/favorite';

export default function Wishlist() {
  const userToken = localStorage.getItem('token');
  console.log(userToken);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);


  async function fetchProducts() {
    try {
      const response = await fetch(`${faveURL}/?userId=${user.user.userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message);
    }
  }

  function addToBasket(productId) {
    // Implementation for adding product to basket
    console.log(`Adding product ${productId} to basket`);
    // Assuming there's logic here to handle the addition
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "10rem" }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.map((prod, index) => (
        <div key={index} className="product-card">
          <h2>{prod.name}</h2> {/* Assuming you want to display product name */}
          <p>Price: {prod.price}</p>
          {prod.image && (
            <img
              src={prod.image}
              alt={prod.name}
              style={{ width: "100px", height: "100px" }}
            />
          )}
          <button onClick={() => addToBasket(prod._id)}>Add to Basket</button>
        </div>
      ))}
    </div>
  );
}

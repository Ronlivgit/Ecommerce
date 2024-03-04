import React from "react";
import { useNavigate } from 'react-router-dom'; 


function NotFound() {
  const navigate = useNavigate(); 

  return (
    <div>
        <h1>404</h1>
      <h1>Where are you going</h1>
      <button onClick={() => navigate('/home')}>go back to Home</button>
    </div>
  );
}

export default NotFound;
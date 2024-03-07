import React, { createContext, useContext, useEffect, useState } from 'react';
import {APIBaseUrl} from './../config/Api'

export const UserContext = createContext();
export const useAuth = () => useContext(UserContext);

export default function UserProvider  ({ children })  {
  const [user, setUser] = useState(null);


  const getUser = async ( )=>{
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${APIBaseUrl}/user/init-user`, 
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
      setUser(data); 
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(()=>{
    getUser();
  },[]);



  return (
    <UserContext.Provider value={{ user, setUser , getUser }}>
      {children}
    </UserContext.Provider>
  );
};


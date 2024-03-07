import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserContext, useAuth } from './UserProvider';

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export default function CartProvider({children}) {

const {user} = useContext(UserContext)

const [userCartItems,setUserCartItems] = useState([])
const [guestCartItems,setGuestCartItems] = useState([])
// localStorage.setItem('guestCart' , guestCartItems)
// const cartLocal = localStorage.getItem('guestCart')
// const cartLocal = localStorage.setItem('guestCart' , guestCartItems)

//! Check if User is logged, if so, use BackEnd to store it (BE)
 //axios post with Authentication + Authorization

//! Build localStorage object that stores the cartInfo(Array with productId)


//? Ron - Not done
const addToCart = (e) => {
    if(user){

    }
    else{
        console.log(localStorage.getItem('guestCart'));
        const payload = {
            productId : e.productId,
            img : e.img,
            price : e.price,
            title : e.title,
            units : e.units
        }
        if(guestCartItems.some(item => item.productId === payload?.productId)){
            alert(`${e.title} is already inside your cart`)
        }
        else{
            setGuestCartItems(prevArr => [...prevArr, payload])
            const guestStorage = localStorage.setItem('guestCart',JSON.stringify(guestCartItems))
            console.log(guestStorage);
            setTimeout(() => {
                console.log("guestCartItems : " , guestCartItems);
            }, 10);
        }
    }
}


useEffect(()=>{
    
},[])





  return (
    <CartContext.Provider value={{addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

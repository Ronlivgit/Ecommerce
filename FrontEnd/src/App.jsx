import { useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import { UserContext } from './context/UserProvider';
import { CardActionArea } from '@mui/material';
import Footer from './components/footer/Footer';

import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Cart from './components/cart/Cart'
import NotFound from './pages/notFound/NotFound';
import Profile from './pages/profile/Profile';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Wishlist from './pages/wishlist/Wishlist';
import About from './pages/about/About';



function App() {
  // const { user, setUser } = useContext(UserContext);


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            } />

          <Route
            path="/cart"
            element={
              <Cart />
            } />

          <Route
            path="/wishlist"
            element={
              <Wishlist />
            } />
          <Route
            path="/about"
            element={
              <About />
            } />


          <Route
            path="/:productId"
            element={<SingleProduct />
            } />

          <Route
            path="/profile"
            element={<Profile />
            } />

          <Route
            path="/signup"
            element={<SignUp />
            } />

          <Route
            path="/signIn"
            element={<SignIn />
            } />



          <Route path="*" element={<NotFound />} />


        </Routes>


<Footer/>



      </BrowserRouter>


    </>
  )
}

export default App







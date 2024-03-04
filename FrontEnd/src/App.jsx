import { useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { UserContext } from './context/UserProvider';
import { CardActionArea } from '@mui/material';


import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Cart from './components/cart/Cart'
import NotFound from './pages/notFound/NotFound';
import Profile from './pages/profile/Profile';



function App() {
  // const { user, setUser } = useContext(UserContext);


  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* {user ? ( */}
          <Routes>
            <Route
              path="/home"
              element={
                <Home />
              } />

            <Route
              path="/cart"
              element={
                <Cart />
              } />


            <Route
              path="/profile"
              element={<Profile />
              } />


            <Route
              path="/home/:ProductId"
              element={<Home />
              } />





            <Route path="*" element={<NotFound />} />


          </Routes>
        {/* ) : ( */}
          <Routes>
            <Route
              path="/home"
              element={
                <Home />
              } />

            <Route
              path="/cart"
              element={
                <Cart />
              } />


            <Route
              path="/home/:productId"
              element={<Home />
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



            <Route path="*" element={<NotFound/>} />


          </Routes>
        {/* )} */}






      </BrowserRouter>


    </>
  )
}

export default App
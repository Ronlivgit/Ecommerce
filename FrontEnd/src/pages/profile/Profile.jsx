import React, { useContext, useEffect } from 'react'
import SignIn from '../../components/auth/SignIn'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider';
import AddProduct from '../../components/addProduct/AddProduct';

export default function Profile() {
  const { user } = useContext(UserContext);

  console.log(user);

  useEffect (()=>{
    console.log(user);
  },[user]);

  return (
    <>
      <div>Profile</div>
      {user ? (
        <>
        <h1>hello {user.fullName}</h1>
        <AddProduct/>
        </>
      ) : (
        <>
        <h1>pleas Sign in to see profile</h1>
        <Link to='/signIn'>Sign in</Link>
        </>

      )}
    </>
  )
}

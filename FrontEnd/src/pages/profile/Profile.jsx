import React, { useContext } from 'react'
import SignIn from '../../components/auth/SignIn'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider';

export default function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>Profile</div>
      {user ? (
        <h1>hello {user.fullName}</h1>
      ) : (
        <>
        <h1>pleas Sign in to see profile</h1>
        <Link to='/signIn'></Link>
        </>

      )}
    </>
  )
}

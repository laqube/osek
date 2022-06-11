import React from 'react';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  const goHome=async()=>{
    try{navigate('/');
    }
    catch(e){
      console.log(e.message);
    }
  }
  const auth = getAuth();
if (auth.currentUser !== null) {
    user.providerData.forEach(() => {
    console.log("  Provider-specific UID: " + user.uid);
    console.log("  Name: " + user.displayName);
    console.log("  Email: " + user.email);
  });
}

  return (
    <div >
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <p>User Name: {user.displayName}</p>
      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
      <button onClick={goHome}>Home</button>
    </div>
  );
};
export default Account;
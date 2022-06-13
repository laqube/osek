import React from 'react';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item><h1>Account</h1></Item>
                </Grid>
                <Grid item xs={8}>
                    <p>User Email: {user && user.email}</p>
                    <p>User Name: {user.displayName}</p>
                    <button onClick={handleLogout} className='border px-6 py-2 my-4'>
                        Logout
                    </button>
                    <button onClick={goHome}>Home</button>
                </Grid>
            </Grid>
        </Box>


    </div>
  );
};
export default Account;
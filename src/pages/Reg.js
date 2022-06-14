import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import Container from '@material-ui/core/Container'
import {createTheme, ThemeProvider} from "@material-ui/core";

import {UserAuth} from '../context/AuthContext'
import { getAuth,updateProfile } from "firebase/auth";
import { useNavigate} from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="/"
                  style={{
                      textDecoration: 'none',
                      color:'black',
                  }}>
                osek.kz
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
const Reg = () => {


    const[email,setEmail] =useState('');
    const[password, setPassword]=useState('');
    const[name, setName]=useState('');
    const[error, setError]=useState('');
    const navigate=useNavigate();
    const auth = getAuth();

    const {createUser}=UserAuth();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError('');
        try{
            await createUser(email, password);
            navigate('/accountlay');
            alert("Please update page after signup")
            updateProfile(auth.currentUser, {
                displayName: name,
              }).then(() => {
                // Profile updated!
                console.log('Profile updated!');
              }).catch((error) => {
                // An error occurred
                console.log(error);
              });
        }catch(e){
            setError(e.message);
            console.log(e.message);
        }
    };  

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" alignItems="center">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        {/*<LockOutlinedIcon />*/}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Tirkeluw
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={(e)=>setName(e.target.value)}
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Aty"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Tegі"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={(e)=>setEmail(e.target.value)}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Pocta"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={(e)=>setPassword(e.target.value)}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Qupııasóz"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Jarnama jáne ózge habarlama jіberýge kelsemіn"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Tіrkeluw
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2"
                                      style={{
                                          textDecoration: 'none',
                                          color:'#fb4424',
                                      }}>
                                    {"Bar tіrkelgіge kіruw"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }}
                />
            </Container>
        </ThemeProvider>
    );
};

export default Reg;

import React, {useState} from 'react';
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
import { async } from '@firebase/util';

import {useNavigate} from 'react-router-dom';


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

const Login = () => {
    const {signIn} =UserAuth()
    const[email,setEmail] =useState('');
    const[password, setPassword]=useState('');
    const[error, setError]=useState('');
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await signIn(email,password);
            navigate('/account');
        }catch(e){
            setError(e.message);
            console.log(e.message);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container  maxWidth="xs" component="main" direction="column" justifyContent="center">
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

                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Kiruw
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Pocta"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Qupııasóz"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Júıede qalý"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Kiruw
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/404" variant="body2"
                                      style={{
                                          textDecoration: 'none',
                                          color:'#fb4424',
                                      }}>
                                    Qupııasózdі umyttym
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup" variant="body2"
                                      style={{
                                          textDecoration: 'none',
                                          color:'#fb4424',
                                      }}>
                                    {"Jańadan tіrkeluw"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
};

export default Login;
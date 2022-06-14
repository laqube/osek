import React,{useState} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Badge from '@mui/material/Badge';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Items from '../components/item';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import NavBar from '../components/NavBar';
import {makeStyles} from "@material-ui/core/styles";


import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { getAuth,updateProfile } from "firebase/auth";

const defaultTheme = createTheme();

const theme = createTheme({
    palette: {
        primary: {
            main: "#fb4424",
        },
        secondary: {
            main: "#000",
        },
    },
    components: {
        Tab: {
            variants:[
                {
                    props: {variant: 'stylecoded'},
                    style: {
                        color: "black",
                        "&:hover": {
                            color:  "#fb4424"
                        },
                        "&:selected": {
                            color:  "#fb4424"
                        },

                    },
                },
            ],
        },
    },
});

const styles = makeStyles({
    select: {
        textDecoration: "none",
        '&:before': {
            color: '#fb4424',
        },
        '&:after': {
            color: '#fb4424',
        },
        '&:not(.Mui-disabled):hover::before': {
            color: '#fb4424',
        },
    },
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        alignContent: "center",
        alignItems: "center",
        ['@media (max-width:780px)']: {
            flexDirection: "column"
        }

    },
    logo: {
        width: "100%",
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
    logoMobile:{
        width: "100%",
        display: "none",
        ['@media (max-width:780px)']: {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        paddingLeft: "5rem",
        "&:hover": {
            color:  "#fb4424"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"    }
    },

    Item: {
        cursor: "pointer",
        flexGrow: 1,
        paddingLeft: "5rem",
        "&:hover": {
            color:  "#fb4424"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"    }
    },
})

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: "5rem",
        padding: '0 4px',
        height:'50%',
        color: 'black',
        "&:hover": {
            color:  "#fb4424"
        },
    },
}));

function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{  }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Input = styled('input')({
    display: 'none',
});

const Accountlayout = () => {
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


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = styles();


    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
  
    const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleImageSubmit = () => {
      const imageRef = ref(storage, "Image");
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              setUrl(url);
              updateProfile(auth.currentUser, {
                photoURL: url
            })
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
          setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    return (
        <div >
            <ThemeProvider theme={theme}>
                <NavBar/>
                <Container sx={{ mt: "5rem" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} direction="column">
                                <Item sx={{
                                }}>
                                    <Input accept="image/*" id="icon-button-file" type="file" onChange={handleImageChange} />
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <label htmlFor="icon-button-file">
                                            <StyledBadge badgeContent={
                                                <PhotoCamera  />
                                            }>
                                                <Avatar src={user.photoURL} sx={{ width: "5rem", height:"5rem", mx:"auto"  }}/>
                                            </StyledBadge>
                                        </label>

                                    </IconButton>
                                    <button onClick={handleImageSubmit}>Submit</button>
                                    <Tabs
                                        orientation="vertical"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs"
                                        sx={{mt: "4rem",
                                             mr:"auto",
                                        }}
                                    >
                                        <Tab variant="stylecoded" label="Tіrkelgі" {...a11yProps(0)} />
                                        <Tab variant="stylecoded" label="Tańdaýlylar" {...a11yProps(1)} />
                                    </Tabs>
                                </Item>
                            </Grid>

                            <Grid item xs={8}>
                                <TabPanel value={value} index={0}>
                                    <Item>
                                        <h2>User Email:{user && user.email}</h2>
                                        <h2>User Name: {user.displayName}</h2>
                                        <h2>Change password</h2>
                                        <p> <button onClick={handleLogout}>Logout</button> </p>
                                    </Item>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Item>
                                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                            {Array.from(Array(3)).map((_, index) => (
                                                <Grid item xs={6} sm={6} my={6} key={index}>
                                                    <Items/>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Item>
                                </TabPanel>

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default Accountlayout;
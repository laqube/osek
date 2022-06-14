import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Item from "../components/item"
import { Container, Grid} from '@mui/material';
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Slider from '@mui/material/Slider';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect,useState } from 'react';
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../firebase';



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions, Tooltip } from '@material-ui/core';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderIcon';
import IconButton from '@material-ui/core/IconButton';
import Route from 'react-router-dom';
import {Link} from "react-router-dom";
import { ContactsOutlined } from '@mui/icons-material';
function valuetext(value) {
    return `${value}tg`;
}

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#808080",
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
    }
})

const theme = createTheme({
    palette: {
        primary: {
            main: "#000",
        },
        secondary: {
            main:"#fb4424" ,
        },
    },
    typography: {
        fontFamily: [
            'Quicksand'
        ],
        h4: {
            fontWeight: 600,
            fontSize: 28,
            lineHeight: '2rem',

        },
        h5: {
            fontWeight: 100,
            lineHeight: '2rem',
        },
    },
});

const ShopMen = () => {
    const[PostItems,setPostItems]=useState([]);
    const postsItemsRef=collection(db,"Clothes");
    useEffect(()=>{
        const getPosts = async() =>{
            const data = await getDocs(postsItemsRef);
            setPostItems(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
        };
        getPosts();
    },[]);

    const classes = styles();
    const [value, setValue] = React.useState([0, 100000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <NavBar style={{backgroundColor: '#808080'}}/>
                <Container style={{marginTop: '5%'}}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={2}>
                            <h1>Suryptaý</h1>
                            <FormLabel>Quny(tg)</FormLabel>
                            <Slider
                                min={0}
                                max={300000}
                                step={10000}
                                getAriaLabel={() => 'Price Range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                            <FormControl>
                                <FormLabel id="sortingRadios">Tіzіm</FormLabel>
                                <RadioGroup
                                    aria-labelledby="sortingRadios"
                                    defaultValue="priceUp"
                                    name="prodSort"
                                >
                                    <FormControlLabel value="priceUp" control={<Radio />} label="Arzanynan bastap" />
                                    <FormControlLabel value="priceDown" control={<Radio />} label="Qymbatynan bastap" />
                                    <FormControlLabel value="alphabetical" control={<Radio />} label="Álіpbı boıynsha" />
                                    <FormControlLabel value="versabetical" control={<Radio />} label="Álіpbı sońynan" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={14}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {PostItems.map((Items)=>{
                                    return(
                                        <Grid Items xs={2} sm={3} my={4}>
                                        <div>
                                        <Container maxWidth="xs">
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardActionArea>
                                                    <Link to="/404"
                                                          style={{
                                                              textDecoration: 'none',
                                                              color:'black'
                                                          }}>
                                                        <CardMedia
                                                            component="img"
                                                            height="250"
                                                            image={Items.Img1}
                                                            alt="item image"
                                                        />
                                                    </Link>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {Items.Model}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {Items.Price}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions  justifyContent="flex-end">
                                                    <Tooltip title="Like">
                                                        <IconButton>
                                                            <Button size="small" color="primary">
                                                                {/*<FavoriteBorderIcon/>*/}
                                                                Icon
                                                            </Button>
                                                        </IconButton>
                                                    </Tooltip>
                                                </CardActions>
                                            </Card>
                                        </Container>
                                    </div>
                                    </Grid>
                                    )
                                })
                                }
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
                <Footer/>
            </ThemeProvider>
        </div>
    );
};

export default ShopMen;

import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Item from "../components/item"
import { Container, Grid, Row, Column } from '@mui/material';


const Shop = () => {
    return (
        <div>
            <NavBar/>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(12)).map((_, index) => (
                    <Grid item xs={2} sm={3} my={4} key={index}>
                        <Item/>
                    </Grid>
                ))}
            </Grid>

            <Footer/>
        </div>
    );
};

export default Shop;
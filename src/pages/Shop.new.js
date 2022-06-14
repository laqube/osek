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



const ShopNew = () => {
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
                                sx={{color: '#808080'}}
                            />
                            <FormLabel>Tіzіm</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="sortingRadios"
                                    defaultValue="priceUp"
                                    name="prodSort"
                                >
                                    <FormControlLabel value="priceUp" control={<Radio
                                        sx={{color: 'secondary', '&.Mui-checked': {color: '#fb4424',},}}
                                    />} label="Arzanynan bastap" />
                                    <FormControlLabel value="priceDown" control={<Radio
                                        sx={{color: 'secondary', '&.Mui-checked': {color: '#fb4424',},}}
                                    />} label="Qymbatynan bastap" />
                                    <FormControlLabel value="alphabetical" control={<Radio
                                        sx={{color: 'secondary', '&.Mui-checked': {color: '#fb4424',},}}
                                    />} label="Álіpbı boıynsha" />
                                    <FormControlLabel value="versabetical" control={<Radio
                                        sx={{color: 'secondary', '&.Mui-checked': {color: '#fb4424',},}}
                                    />} label="Álіpbı sońynan" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={14}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {Array.from(Array(7)).map((_, index) => (
                                    <Grid item xs={2} sm={3} my={4} key={index}>
                                        <Item/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
                <Footer/>
            </ThemeProvider>
        </div>
    );
};

export default ShopNew;
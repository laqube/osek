import React from 'react';
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";


const styles = makeStyles({
    wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "center"
    },
    bigSpace: {
        marginTop: "5rem"
    },
    littleSpace:{
        marginTop: "2.5rem",
    },
    grid:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
});

const theme = createTheme({
    palette:{
        primary: {
            main: "#2e1667",
        },
        secondary: {
            main: "#c7d8ed",
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

const Welcome = () => {
    const classes = styles();
    const data = [
        {
            image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
            image:
                "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",

        },
        {
            image:
                "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        },
    ];

    return(
        <div className="Welcome">

            <ThemeProvider theme={theme}>
                <NavBar style={{backgroundColor: "#EBEBEA",}}/>
                <Carousel
                    data={data}
                    time={2000}
                    width="850px"
                    height="500px"
                    radius="10px"
                    slideNumber={true}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                    showNavBtn={true}
                    style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        margin: "40px auto",
                    }}
                />
                <div className={classes.bigSpace}>
                    <Footer/>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Welcome;
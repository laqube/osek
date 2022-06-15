import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container, Button, CardActionArea, CardActions, Tooltip } from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box'
import Modal from '@mui/material/Modal';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Carousel from "../components/Carousel";
import Grid from "@material-ui/core/Grid";
import CsBtn from "../components/CustomBtn"
import {getAuth} from "firebase/auth";


const defaultTheme = createTheme();

const theme = createTheme({
    palette: {
        primary: {
            main:"#000"  ,
        },
        secondary: {
            main: "#fb4424",
        },
    },
    typography: {
        fontFamily: [
            'Quicksand'
        ],
        h3: {
            fontWeight: 600,
            fontSize: 30,
            lineHeight: '2rem',

        },
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: '#fff',
    boxShadow: "0px 0px 0 0 #29292a",
    borderRadius: "15px"
};


const Item = () => {
    const auth=getAuth();
    const user=auth.currentUser;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container maxWidth="xs">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                                <CardMedia
                                    onClick={handleOpen}
                                    component="img"
                                    height="100"
                                    image=""
                                    alt="item image"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Item Name
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions disableSpacing sx={{}}>
                            {!user?
                                <div/>
                                :
                                <Tooltip title="Sebetke qosý" >
                                    <IconButton>
                                        <Button size="small" color="primary">
                                            <AddShoppingCartIcon sx={{ color: "#fb4424", float:"left", mr:"auto", }}/>
                                        </Button>
                                    </IconButton>
                                </Tooltip>
                            }
                        </CardActions>
                    </Card>

                </Container>

            </ThemeProvider>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ThemeProvider theme={theme}>
                        <Box sx={{ m: 2 }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                <Grid item xs={12}>
                                    <Box sx={{mx:2}}>
                                        <Typography gutterBottom variant="h3" component="div" >
                                            Item Name
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{ mx: 2 }}>
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
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6} >
                                    <Box sx={{my:2}}>
                                        <Typography variant="h4" color="text.secondary" >
                                            Price
                                        </Typography>
                                    </Box>
                                    <Box sx={{my:1}}>
                                        <Typography variant="h5" color="text.secondary" >
                                            Info text
                                        </Typography>
                                    </Box>
                                    <Box sx={{mt:"5", mr:"5"}}>
                                        <Typography >
                                            <CsBtn txt="Sebetke qosy"/>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </ThemeProvider>

                </Box>
            </Modal>
        </div>
    );
};

export default Item;
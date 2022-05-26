import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container, Button, CardActionArea, CardActions, Tooltip } from '@material-ui/core';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderIcon';
import IconButton from '@material-ui/core/IconButton';
import Route from 'react-router-dom';
import Path from 'react-router-dom';
import {Link} from "react-router-dom";

const Item = () => {
    return (
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
                                height="100"
                                image=""
                                alt="item image"
                            />
                        </Link>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Item Name
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price
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
    );
};

export default Item;
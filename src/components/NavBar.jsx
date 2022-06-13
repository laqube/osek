import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import AviButton from "./AviButton";
import { getAuth } from 'firebase/auth'

const styles = makeStyles({
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
})

function NavBar() {
    const auth=getAuth();
    const user=auth.currentUser;
    const classes = styles()
    return(
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <Link to="/">
                <img src={logo} className={classes.logo} alt="{}"/>
                <img src={logoMobile} className={classes.logoMobile} alt="{}"/>
            </Link>

            <Typography variant="h6" className={classes.menuItem}>
                <Link to="/shop/new"
                      style={{
                          textDecoration: 'none',
                          color:'black',
                      }}>
                    Juwırda
                </Link>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                <Link to="/shop/men"
                      style={{
                          textDecoration: 'none',
                          color:'black',
                      }}>
                    Erlerge
                </Link>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                <Link to="/shop/women"
                      style={{
                          textDecoration: 'none',
                          color:'black',
                      }}>
                    Äıelderge
                </Link>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                <Link to="/shop/kids"
                      style={{
                          textDecoration: 'none',
                          color:'black',
                      }}>
                    Balalarga
                </Link>
            </Typography>
            <Link to="/signup"style={{textDecoration: 'none',color:'black',}}>
                <CustomBtn txt="Kiruw" />
            </Link>
            <AviButton/>
        </Toolbar>
    )
}

export default NavBar
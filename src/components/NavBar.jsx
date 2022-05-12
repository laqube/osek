import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {Button} from '@material-ui/core'

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
        width: "15%",
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

function NavBar() {
    const classes = styles()
    return(
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" calssName={classes.bar}>
            <img src={logo} className={classes.logo} alt="{}"/>
            <img src={logoMobile} className={classes.logoMobile} alt="{}"/>
            <Typography variant="h6" className={classes.menuItem}>
                Juwirda
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Erlerge
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Bikecterge
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Balalarg'a
            </Typography>

            <Link to="/signup">
                <CustomBtn txt="Tirkeluw"/>
            </Link>

        </Toolbar>
    )
}

export default NavBar
import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Grid, Avatar, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../profilePhoto.jpg";

//Css
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#142850",
    },
    subtitle: {
        color: "#27496d",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))
const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Deepika Sathianarayanan"/>
            </Grid>
            
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Deepika Sathianarayanan"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Designer", "Software Developer", "UI/UX Designer"]} 
                typeSpeed={40}
                backSpeed={60}
                loop/>
            </Typography>
        </Box>
    )
}

export default Header

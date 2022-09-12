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
    },
    typedContainer: {
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        textAlign: "center",
        zIndex: 1
    },
    footerText: {
        marginBottom: ""
    }
}))
const Header = () => {
    const classes = useStyles()
    return (
        <>
        <Box className={classes.typedContainer}>
            <Grid container justify="center" >
            <Avatar className={classes.avatar} src={avatar} alt="Deepika Sathianarayanan"/>
            </Grid>
            
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Deepika Sathianarayanan"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Designer", "Frontend Developer", "UI/UX Designer"]} 
                typeSpeed={40}
                backSpeed={60}
                loop/>
            </Typography>
            <br/>
            <Typography className="description">I'm a person with skills of a developer and a mindset of a designer <br/> which can help to fill in gaps between the design and its fully functional product <br/> inturn providing the best user experience</Typography>
        </Box>
        </>
    )
}

export default Header

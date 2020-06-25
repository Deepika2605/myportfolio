import React, { useState } from 'react';
import {Link} from "react-router-dom";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import avatar from "../profilePhoto.jpg";
import { Footer } from './Footer';

//Css
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#27496d",
        height: "100%",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "#dae1e7"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Skills",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contacts"
    }

]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open });
    });

    const classes = useStyles();

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider("right", false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Deepika Sathianarayanan"/>
            <Divider />
            <List>
                {menuItems.map((lsItem, key)=>(
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon className={classes.listItem}>
                    {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                </ListItem>
                ))}
             </List>  
        </Box>
    )
    return (
        <>
        
        <Box component="nav">
            <AppBar position="static" style={{background: "#142850"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <MenuIcon style={{color: "#00909e", fontSize: "40px"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "#dae1e7", fontFamily: "proxima-nova, sans-serif"}}>
                        PORTFOLIO
                    </Typography>
                    <MobilRightMenuSlider
                    anchor="left"
                    open={state.right}
                    onClose={toggleSlider("right",false)}>
                        {sideList("right")}
                        <Footer />
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar

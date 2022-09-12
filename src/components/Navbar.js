import React, { useState } from 'react';
import {Link} from "react-router-dom";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, ListItem, IconButton, ListItemText, List, Box, ListItemIcon} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
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
        width: theme.spacing(16),
        height: theme.spacing(16)
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
            <div position="static">
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <MenuIcon style={{color: "#191970", fontSize: "40px"}}/>
                    </IconButton>
                    <MobilRightMenuSlider
                    anchor="left"
                    open={state.right}
                    onClose={toggleSlider("right",false)}>
                        {sideList("right")}
                        <Footer />
                    </MobilRightMenuSlider>
                </Toolbar>
            </div>
        </Box>
        </>
    )
}

export default Navbar

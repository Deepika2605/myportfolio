import React from 'react'
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root":{
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "#dae1e7",
            "&:hover": {
                fill: "#dae1e7",
                fontSize: "1.8rem"
            }
        }
    }
})
export const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background: "#142850"}}>  
            <BottomNavigationAction 
            className={classes.root}
            style={{padding: 0}}
            icon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/deepikasathianarayanan"
            />
            <BottomNavigationAction 
            className={classes.root}
            style={{padding: 0}}
            icon={<GitHubIcon />}
            href="https://github.com/Deepika2605"
            />
        </BottomNavigation>
    )
}

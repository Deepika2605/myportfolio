import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme=>({
    mainContainer: {
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #27496d",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid #27496d",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after":{
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#142850 #142850 transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#27496d"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #142850 #142850"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#142850",
        color: "#dae1e7",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display:"none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "#142850",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "#142850",
        fontWeight:"bold",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography className={classes.heading} variant ="h4" align="center">
                    Work Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    {/** First Data Block of the Timeline */}
                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">
                        Sep-2015
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            System Engineer </Typography>
                        <Typography variant="body1" align="center" style={{color:"#dae1e7", fontWeight:"bold"}}>
                            Tata Consultancy Services, India </Typography>
                        <Typography variant="subtitle2" align="center" style={{color:"#303960", fontWeight:"bold"}}>
                        Developing the change requests using Java also carrying out impact analysis. Solving functional issues and code optimization.</Typography>
                    </Box>
                    {/** Second Data Block of the Timeline */}
                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">
                        Mar-2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Software Developer </Typography>
                        <Typography variant="body1" align="center" style={{color:"#dae1e7", fontWeight:"bold"}}>
                            Robert Bosch, India </Typography>
                        <Typography variant="subtitle2" align="center" style={{color:"#303960", fontWeight:"bold"}}>
                        My responsibilities were enhancing user interface of the web application using Angular6, HTML5, CSS3, Bootstrap and development of micro services using Spring Boot and Rest API. Also deployment activities in AWS </Typography>
                    </Box>
                    {/** Third Data Block of the Timeline */}
                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">
                        Jan-2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Werkstudent (Software Developer) </Typography>
                        <Typography variant="body1" align="center" style={{color:"#dae1e7", fontWeight:"bold"}}>
                            Software AG, Germany </Typography>
                        <Typography variant="subtitle2" align="center" style={{color:"#303960", fontWeight:"bold"}}>
                        I was involved in developing application features following Agile methodology, UI development using HTML 5, AngularJs/Angular6, Scss, Bootstrap and developing APIs using Apama, a Java framework, to manage logistic data. </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume

import React, { useState } from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Grid, Box } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send";
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import Navbar from './Navbar';
import './Smiley.css';


const useStyles = makeStyles(theme => ({

    mainGrid: {
        width: '100vw',
        height: '100vh',
        spacing: 0,
        justify: 'space-around'
    },
    form: {
        fontWeight: "bold",
        fontFamily: "cursive"
    },
    details:{
        top: "30%",
        left: "8%",
        position: "absolute"
    },
    icons: {
        color: "#142850",
        fontFamily: "cursive",
        "& .MuiSvgIcon-root": {
            fill: "#27496d",
            "&:hover": {
                fill: "#142850",
            }
        }
    },
    data: {
        color: "#142850",
        fontFamily: "cursive"
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#142850",
        },
        "& label": {
            color: "#27496d"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#27496d"
            },
            "&:hover fieldset": {
                borderColor: "#27496d"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#27496d"
            }
        }
    },
})(TextField);


// const handleSubmit = function (name, email, company) {
//     alert("Your message has been sent to Deepika Sathianarayanan");

//     let templateParams = {
//         from_name: email,
//         to_name: 'deeps.8ds@gmail.com',
//         subject: name,
//         message_html: "Mr/Mrs." + name + " from " + company + " has contacted you",
//     }

//     emailjs.send(
//         'gmail',
//         'template_DtOPu6is',
//         templateParams,
//         'user_aToQ2y5G4hc0lPPzrOcB1'
//     )

// }

const _onMouseMove = function (e) {
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(e.screenX - x, e.screenY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
    })
}

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');

    const classes = useStyles()


    return (
        <Box component="div" onMouseMove={_onMouseMove}>
            <Navbar />
            <Grid container className={classes.mainGrid}>
                <Grid className={classes.details} item xs={12} sm={6} md={4}>
                    <Typography variant="h5" className={classes.icons}><EmailIcon /> Email:</Typography>
                    <Typography variant="h6" className={classes.data}> deepika.sathianarayanan@stud.h-da.de</Typography>
                    <Typography variant="h6" className={classes.data}> deeps.8ds@gmail.com</Typography>
                    <br/>
                    <Typography variant="h5" className={classes.icons}><PhoneIcon /> Phone:</Typography>
                    <Typography variant="h6" className={classes.data}> +49 15730269696</Typography>
                    <Typography variant="h6" className={classes.data}> +91 9036649136</Typography>
                </Grid>
                <Grid className={classes.form} item xs={12} sm={6} md={6}>
                    <form name="contact" className="contact" method="POST" data-netlify="true">
                        <Typography variant="h5" style={{ color: "#142850", fontFamily: "cursive", textAlign: "center", textTransform: "uppercase" }}>
                            Hire or Contact Me </Typography>
                        <InputField name="name" fullWidth={true} label="Name" variant="outlined" inputProps={{ style: { color: "#142850" } }} margin="dense" size="medium"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }} />
                        <br />
                        <InputField name="email" fullWidth={true} label="Email" variant="outlined" inputProps={{ style: { color: "#142850" } }} margin="dense" size="medium"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                        <br />
                        <InputField name="company" fullWidth={true} label="Company" variant="outlined" inputProps={{ style: { color: "#142850" } }} margin="dense" size="medium"
                            value={company}
                            onChange={(e) => { setCompany(e.target.value) }} />
                        <br />
                        <button className="submitButton" type="submit"><SendIcon/></button>
                    </form>
                    <Grid className="smiley" item xs={12} sm={6} md={4}>
                        <div className="face">
                            <div className="eyes">
                                <div className="eye"></div>
                                <div className="eye"></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact

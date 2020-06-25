import React, {useState} from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';
import * as emailjs from 'emailjs-com';

const useStyles = makeStyles(theme=> ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "#142850",
        borderColor: "#142850"
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
        "& .MuiOutlinedInput-root":{
            "& fieldset": {
                borderColor: "#27496d"
            },
            "&:hover fieldset":{
                borderColor: "#27496d"
            },
            "&.Mui-focused fieldset":{
                borderColor: "#27496d"
            }
        }
    },
})(TextField);


const handleSubmit = function(name, email, company) {
    alert("✔️ This works on every component! "+name+" "+email+" "+company);

    let templateParams = {
        from_name: email,
        to_name: 'deeps.8ds@gmail.com',
        subject: name,
        message_html: "Mr/Mrs."+name+" from "+company+" has contacted you",
    }

    emailjs.send(
        'gmail',
        'template_DtOPu6is',
         templateParams,
        'user_aToQ2y5G4hc0lPPzrOcB1'
   )
    
}

const Contact = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');

    const classes = useStyles()
    
    
    return (
        <Box component="div">
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color: "#142850", fontFamily: "proxima-nova, sans-serif", textAlign: "center", textTransform: "uppercase"}}>
                        Hire or Contact Me
                    </Typography>
                    <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{ style: {color: "#142850" }}} margin="dense" size="medium"
                    value={name} 
                    onChange={(e) => {setName(e.target.value)}}/>
                    <br/>
                    <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{ style: {color: "#142850" }}} margin="dense" size="medium"
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}}/>
                    <br/>
                    <InputField fullWidth={true} label="Company" variant="outlined" inputProps={{ style: {color: "#142850" }}} margin="dense" size="medium"
                    value={company} 
                    onChange={(e) => {setCompany(e.target.value)}}/>
                    <br/>
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />} onClick={() => {setName(''); setEmail(''); setCompany(''); handleSubmit(name,email,company);}}>
                        Contact Me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact

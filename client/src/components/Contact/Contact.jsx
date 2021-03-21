import React, { useState } from 'react';
import { useStyles } from './contactStyles';
import { 
    Box, 
    TextField, 
    Typography,
    Button, 
} from '@material-ui/core';


const Contact = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }
    return (
        <Box p={3} className={classes.container}>
            <Box className={classes.form} >
            <Typography
                    align="center"
                    variant="h4"
                    className={classes.font1}
                    color="primary"
                >
                    <span className={classes.title}>Contact</span> us
                </Typography>  
                <form 
                    className={classes.form1}
                    noValidate 
                    autoComplete="off"
                >
                    
                    <TextField
                        label="Name" 
                        variant="filled"
                        color="secondary"
                        name="name"
                        className={classes.input}
                        placeholder="Enter you Name..."
                        // helperText="Enter your Name"
                        margin="normal"
                        fullWidth
                        onChange={handleChange}
                        InputProps={{
                            className: classes.input
                        }}
                    />
                    <TextField
                        label="Email" 
                        variant="filled"
                        color="secondary"
                        className={classes.input}
                        placeholder="Enter you Email..."
                        // helperText="Enter your Email"
                        margin="normal"
                        name="email"
                        fullWidth
                        onChange={handleChange}
                        InputProps={{
                            className: classes.input
                        }}
                    />
                    <TextField
                        className={classes.textArea}
                        label="Message" 
                        variant="filled"
                        name="message"
                        color="secondary"
                        placeholder="Enter you Message..."
                        margin="normal"
                        fullWidth
                        onChange={handleChange}
                        InputProps={{
                            className: classes.textArea
                        }}
                        type="textarea"
                        multiline
                    />
                    <Button 
                        variant="contained" color="secondary"
                        size="large"
                        className={classes.btn}
                        onClick={handleSubmit}
                        fullWidth
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default Contact;

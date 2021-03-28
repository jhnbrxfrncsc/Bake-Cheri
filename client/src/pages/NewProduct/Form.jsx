import React from 'react';
import useStyles from './styles';
import { Form as Forms, useFormikContext } from 'formik';
import {
    Button,
    Grid,
    InputAdornment,
    Typography
} from '@material-ui/core';
import FileBase from 'react-file-base64';
import Textfield from './FormsUI/Textfield';
import SelectField from './FormsUI/Select'



const Form = ({
    values, 
    handleChange, 
    touched, 
    errors, 
    handleSubmit
}) => {
    const classes = useStyles();
    const { setFieldValue } = useFormikContext();
    const categories = ["Cakes", "Cupcakes", "Doughnuts", "Sweets"];
    
    return (
        <Forms 
            onSubmit={handleSubmit}
            autoComplete="off"
            className={classes.form}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography 
                        variant="h5"
                        color="primary" 
                        align="center"
                        gutterBottom
                        className={classes.font1}
                    >
                        add <span className={classes.title}> NEW PRODUCT </span>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Textfield 
                        name="name"
                        label="Product Name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Textfield 
                        name="price"
                        label="Product Price"
                        type="number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    ₱
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SelectField 
                        name="category"
                        label="Product Category"
                        options={categories}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setFieldValue("image", base64)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        color="primary"
                        variant="contained" 
                        fullWidth
                        type="submit"
                    >
                        Add Product
                    </Button>
                </Grid>
            </Grid>
        </Forms>
    )
}

export default Form;

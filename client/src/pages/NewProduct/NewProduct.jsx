import React from 'react';

// Formik
import { Formik } from 'formik';
import Schema from '../../schema/newProductSchema';

// Material UI
import { Paper } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { postProduct } from '../../redux/actions/products';

// Component
import Form from './Form';

const NewProduct = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Formik 
                    initialValues={{
                        name: "",
                        image: "",
                        price: "",
                        category: "",
                    }}
                    onSubmit={
                        (data, { resetForm }) => {
                            const newCategory = ['All', data.category];
                            data.category = newCategory;
                            dispatch(postProduct(data));
                            resetForm({ values : '' });
                        }
                    }
                    validationSchema = {Schema}
                    component={Form}
                />
            </Paper>
        </div>
    )
}

export default NewProduct;

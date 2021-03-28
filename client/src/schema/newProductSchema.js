import * as yup from 'yup';

const newProductSchema = yup.object({
    name: yup
        .string('Enter your email')
        .required('Product Name is required'),
    image: yup
        .string()
        .required('Image is required'),
    price: yup
        .number('Enter the Price')
        .integer()
        .required('Price is required'),
    category: yup
        .string()
        .required('Category is Required'),
});

export default newProductSchema;
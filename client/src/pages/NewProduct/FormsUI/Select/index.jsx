import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const SelectWrapper = ({
    name,
    options,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (e) => {
        const { value } = e.target;
        setFieldValue(name, value);
    }
    
    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        fullWidth: true,
        variant: "outlined",
        onChange: handleChange
    }

    if(meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }
    return (
        <TextField {...configSelect}>
            {
                options.map((item, index) => {
                    return (
                        <MenuItem value={item} key={index}>
                            {item}
                        </MenuItem>
                    )
                })
            }
        </TextField>
    )
}

export default SelectWrapper

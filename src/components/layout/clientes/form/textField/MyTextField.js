import React from 'react';
import { useField, Field } from 'formik';
import { TextField } from 'formik-material-ui';

const MyTextField = ({ ...props }) => {
    const [field, meta] = useField(props);
 

    return (
    <>
      <Field
          component={TextField}
          {...props}
          {...field}
          variant="outlined"
      />
      {meta.errors && meta.touched ? (
        <>{meta.errors}</>) : null}
    </>
    );
  };
 export default MyTextField;
 
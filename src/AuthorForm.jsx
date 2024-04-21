import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AuthorForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Name is required';
        }
        if (!values.birthDate) {
          errors.birthDate = 'Birth Date is required';
        }
        if (!values.biography) {
          errors.biography = 'Biography is required';
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Birth Date</label>
          <Field type="date" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>
        <div>
          <label>Biography</label>
          <Field as="textarea" name="biography" />
          <ErrorMessage name="biography" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;

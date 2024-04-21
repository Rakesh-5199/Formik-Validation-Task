import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
  });

  return (
    <div>
      <h2>Book Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <Field type="text" name="author" className="form-control" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <Field type="text" name="isbn" className="form-control" />
            <ErrorMessage name="isbn" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="publicationDate">Publication Date</label>
            <Field type="date" name="publicationDate" className="form-control" />
            <ErrorMessage name="publicationDate" component="div" className="error" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;

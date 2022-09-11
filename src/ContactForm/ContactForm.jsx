import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from'./ContactForm.module.css'

const ContactForm = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className={styles.description}>If you have any questions please don't hesitate to contact us. We're here to help!</div>
    <Formik

      initialValues={{ email: '', message: '' }}

      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required')

      })}

      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>

        <Field name="email" type="email" placeholder="Your email" className={styles.email} />
        <ErrorMessage name="email" />

        <Field name="message" type="text" as='textarea' placeholder="Your message" className={styles.message} />
        <ErrorMessage name="message" />

        <button type="submit">Send</button>
      </Form>
    </Formik>
    </div>
  );
};

export default ContactForm;
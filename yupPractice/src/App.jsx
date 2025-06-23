import "./App.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  const errorMessage = (message) => (
    <p className="validation-error-message">{message}</p>
  );
  const schema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
    firstname: Yup.string().required("firstname"),
    acceptTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms"),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "test@gmail.com",
          password: "",
          acceptTerms: false,
          firstname: "",
        }}
        // Passes your previous Yup schema to your Formik component
        validationSchema={schema}
        /* Use this method to handle what you want to happen when the form is
       submitted. For this simple example we send an alert to the browser
       with all the values of each form field, and stop the rest of the
       submit process from being sent to the back end */
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="email">Email address: </label>
          <Field
            // form input field
            name="email"
            type="text"
          />
          <ErrorMessage
            // displays the validation error message for the 'email' field
            name="email"
            render={errorMessage}
          />

          <label htmlFor="password">Password: </label>
          <Field name="password" type="text" />
          <ErrorMessage name="password" render={errorMessage} />

          <label htmlFor="password">Firstname: </label>
          <Field name="firstname" type="text" />
          <ErrorMessage name="firstname" render={errorMessage} />

          <label htmlFor="acceptTerms">Accept Terms and Conditions: </label>
          <Field name="acceptTerms" type="checkbox" />
          <ErrorMessage name="acceptTerms" render={errorMessage} />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default App;

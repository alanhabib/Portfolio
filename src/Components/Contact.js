import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Contact = ({ values, errors }) => {
  return (
    <Form style={{ flex: 1 }}>
      <Field
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
      />
      <label>
        <Field
          type="checkbox"
          name="newsletter"
          checked={values.newsletter}
        />
        Join our newsletter
      </label>
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
      <button type="button">Submit</button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "premium"
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(9)
      .required()
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(Contact);

export default FormikApp;

import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Contact = ({
  values,
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <Form style={{ flex: 1 }}>
      <div>
        {touched.email && errors.email && (
          <p>{errors.email}</p>
        )}
        <Field
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
        />
      </div>
      <div>
        {touched.password && errors.password && (
          <p>{errors.password}</p>
        )}
        <Field
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
        />
      </div>
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
      <button disabled={isSubmitting}>Submit</button>
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
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(
    values,
    { resetForm, setErrors, setSubmitting }
  ) {
    setTimeout(() => {
      if (values.email === "alan.habib@ding.se") {
        setErrors({ email: "That email is already taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
    console.log(values);
  }
})(Contact);

export default FormikApp;

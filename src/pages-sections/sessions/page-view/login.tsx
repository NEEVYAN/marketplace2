"use client";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENTS
import EyeToggleButton from "../components/eye-toggle-button";
// LOCAL CUSTOM HOOK
import usePasswordVisible from "../use-password-visible";
// GLOBAL CUSTOM COMPONENTS
import BazaarTextField from "components/BazaarTextField";

// ==============================================================
interface Props {
  closeDialog?: () => void;
}
// ==============================================================

const LoginPageView = ({ closeDialog }: Props) => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();

  // LOGIN FORM FIELDS INITIAL VALUES
  const initialValues = { phone: "",name : "", email : ""};

  // LOGIN FORM FIELD VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    phone: yup.string().email("invalid phone").required("Phone is required"),
    email: yup.string().email("invalid email").required("email is required"),
    name: yup.string().email("invalid name").required("Name is required")
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      closeDialog?.();
    }
  });

  return (





    <form onSubmit={handleSubmit}>



<BazaarTextField
        mb={1.5}
        fullWidth
        name="name"
        size="small"
        type="text"
        variant="outlined"
        onBlur={handleBlur}
        value={values.name}
        onChange={handleChange}
        label="Name"
        placeholder="Ruchi Sharma"
        helperText={touched.name && errors.name}
        error={Boolean(touched.name && errors.name)}
      />


<BazaarTextField
        mb={1.5}
        fullWidth
        name="email"
        size="small"
        type="email"
        variant="outlined"
        onBlur={handleBlur}
        value={values.email}
        onChange={handleChange}
        label="Email"
        placeholder="xyz@stazy.live"
        helperText={touched.email && errors.email}
        error={Boolean(touched.email && errors.email)}
      />



      <BazaarTextField
        mb={1.5}
        fullWidth
        name="phone"
        size="small"
        type="phone"
        variant="outlined"
        onBlur={handleBlur}
        value={values.phone}
        onChange={handleChange}
        label="Phone Number"
        placeholder="95**********"
        helperText={touched.phone && errors.phone}
        error={Boolean(touched.phone && errors.phone)}
      />

      {/* <BazaarTextField
        mb={2}
        fullWidth
        size="small"
        name="password"
        label="Password"
        autoComplete="on"
        variant="outlined"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        placeholder="*********"
        type={visiblePassword ? "text" : "password"}
        helperText={touched.password && errors.password}
        error={Boolean(touched.password && errors.password)}
        InputProps={{
          endAdornment: <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
        }}
      /> */}

      <Button fullWidth type="submit" color="primary" variant="contained" size="large">
        SEND OTP
      </Button>
    </form>





  );
};

export default LoginPageView;

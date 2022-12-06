import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import image from "../images/notebook.jpg";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
//import './register.css';

function Register() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Please provide valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const navigate = useNavigate();
  const handleSubmit = (values) => {
    window.localStorage.setItem("register", true);
    navigate("/login");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="form public-form-wrap ">
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Quiz-App</h1>
            <p>Create a new account :</p>
          </div>
          <Container className="container-wrap" component="main" maxWidth="xs">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                } = props;
                return (
                  <div>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography>Register</Typography>
                      <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              name="firstName"
                              required
                              fullWidth
                              id="firstName"
                              label="First Name"
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            {errors.firstName && touched.firstName && (
                              <div className="input-feedback">
                                {errors.firstName}
                              </div>
                            )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id="lastName"
                              label="Last Name"
                              name="lastName"
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            {errors.lastName && touched.lastName && (
                              <div className="input-feedback">
                                {errors.lastName}
                              </div>
                            )}
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            {errors.email && touched.email && (
                              <div className="input-feedback">
                                {errors.email}
                              </div>
                            )}
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            {errors.password && touched.password && (
                              <div className="input-feedback">
                                {errors.password}
                              </div>
                            )}
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={<Checkbox color="primary" />}
                              label="I want to create my account."
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          disabled={isSubmitting}
                          onClick={handleSubmit}
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Register
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link href="#" variant="body2">
                              Already have an account? Sign in
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </div>
                );
              }}
            </Formik>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Register;

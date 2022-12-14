import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import image from "../images/notebook.jpg";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function ForgotPassword() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("please provide valid email")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    window.localStorage.setItem("login", true);
    navigate("/dashboard");
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
          </div>
          <Container className="container-wrap" component="main">
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
                      <Typography>Forgot Password ?</Typography>
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <p>Enter your email below :</p>
                      </div>

                      <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
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
                        </Grid>

                        <Button
                          type="submit"
                          variant="contained"
                          disabled={isSubmitting}
                          onClick={handleSubmit}
                          fullWidth
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Send new password
                        </Button>
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

export default ForgotPassword;

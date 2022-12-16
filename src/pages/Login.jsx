import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import image from "../images/question1.png";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Face6Icon from "@mui/icons-material/Face6";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { loginCheck } from "../services/authentications";

function Login() {
  const navigate = useNavigate();

  const initialValues = {
    username: undefined,
    password: undefined,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please provide valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    const { status, error = "" } = loginCheck(values);
    if (status) {
      window.localStorage.setItem("login", true);
      navigate("/dashboard");
    } else {
      alert(error);
    }
    return true;
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
          <div style={{ textAlign: "center", color: "white" }}>
            <h1>Online Quiz-App</h1>
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
                        <Face6Icon />
                      </Avatar>
                      <Typography>Login</Typography>
                      <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              name="username"
                              value={values.username}
                              required
                              fullWidth
                              id="username"
                              label="Username"
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            {errors.username && touched.username && (
                              <div className="input-feedback">
                                {errors.username}
                              </div>
                            )}
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              value={values.password}
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
                        </Grid>

                        <Button
                          type="submit"
                          variant="contained"
                          disabled={isSubmitting}
                          onClick={handleSubmit}
                          fullWidth
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Submit
                        </Button>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            <Link href="/forgotpwd" variant="body2">
                              Forgot password? Click here.
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
          <div style={{ textAlign: "center", color: "white" }}>
            <p>Login to choose a subject and start playing !!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

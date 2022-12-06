import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import image from "../images/notebook.jpg";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function Subject() {
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
            <p>Choose a Subject of your choice : </p>
          </div>
          <Container className="container-wrap" component="main" maxWidth="xs">
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
                <Typography>Choose Subject</Typography>
                <Box component="form" sx={{ mt: 3 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                  >
                    Maths
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                  >
                    Geography
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                  >
                    History
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                  >
                    General knowledge
                  </Button>
                </Box>
              </Box>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Subject;

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import image from "../images/question2.png";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { quizSubCategory } from "../data/quiz";

function SubSubject() {
  const location = useLocation();
  const {
    state: { id: subjectId },
  } = location;
  console.log("location", location, "subjectId", subjectId);
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
            <h1>Quiz-App</h1>
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
                  <AutoStoriesIcon />
                </Avatar>
                <Typography>Choose a Sub-Subject: </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                  {quizSubCategory
                    .filter((item) => item.subjectId === subjectId)
                    .map((item, index) => {
                      return (
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          key={index}
                          sx={{ mt: 3 }}
                        >
                          {item.title}
                        </Button>
                      );
                    })}
                </Box>
              </Box>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SubSubject;

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import image from "../images/question3.png";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { quizSubjects } from "../data/quiz";

function Subject() {
  const navigate = useNavigate();
  const handleSubSubjectNavigate = (id) => {
    navigate("/sub-subject", { state: { id: id } });
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
                  <AutoStoriesIcon />
                </Avatar>
                <Typography>Choose a Subject of your choice: </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                  {quizSubjects.map((item, index) => {
                    return (
                      <Button
                        variant="contained"
                        fullWidth
                        key={index}
                        sx={{ mt: 3 }}
                        onClick={() => handleSubSubjectNavigate(item.id)}
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

export default Subject;

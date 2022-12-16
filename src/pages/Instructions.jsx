import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import image from "../images/question1.png";
import Button from "@mui/material/Button";

function Instructions() {
  const navigate = useNavigate();
  const user = window.localStorage.getItem("userInfo")
    ? JSON.parse(window.localStorage.getItem("userInfo"))
    : {};
  const handleLogout = () => {
    window.localStorage.removeItem("login");
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
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="public-form-content login-content">
            <div className="page-header">
              <h1>Quiz Instructions</h1>
              <h3>
                1. Choose a Subject and a Sub-subject of your choice. <br></br>
                2. You will have to answer 5 questions on your chosen subject.
                <br></br> 3. Click on the option you think is correct out of the
                4 choices.<br></br> 4. Click on Next to move on to the next
                question.<br></br> 5. Click Quit quiz to end the quiz.
              </h3>
              <Link href="/subject" variant="body2">
                Go to Subject Page
              </Link>
              <br></br>
              <Link href="/dashboard" variant="body2">
                Go to the Dashboard
              </Link>
              <div>
                <Button variant="text" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Instructions;

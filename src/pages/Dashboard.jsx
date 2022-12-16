import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import image from "../images/question1.png";
import Button from "@mui/material/Button";

function Dashboard() {
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
              <h1>Dashboard {user.firstName}</h1>
              <Link href="/subject" variant="body2">
                Go to Subject Page
              </Link>{" "}
              <br></br>
              <Link href="/instructions" variant="body2">
                Go to Instructions Page
              </Link>
              <div>
                <Button variant="contained" onClick={handleLogout}>
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

export default Dashboard;

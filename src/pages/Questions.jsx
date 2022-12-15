import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import image from "../images/notebook.jpg";

function Questions() {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("login");
    navigate("/login");
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
                <h1>Question</h1>
                <Link href="/login" variant="body2">
                  Quit quiz and Logout
                </Link>
                <div onClick={handleLogout}>Logout</div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    );
  };
}
export default Questions;

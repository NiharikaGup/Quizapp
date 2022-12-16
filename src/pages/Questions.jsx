import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import image from "../images/question4.png";

function Questions() {
  const navigate = useNavigate();
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
            <div className="page-header" style={{ textAlign: "center" }}>
              <h1>Question 1/5:</h1>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
export default Questions;

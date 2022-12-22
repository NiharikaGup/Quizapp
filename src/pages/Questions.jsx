import Box from "@mui/material/Box";
import image from "../images/question4.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Questions() {
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
              <h3>Question</h3>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <h5>Subject : 'Subject-name' &nbsp;&nbsp;</h5>
                <h5>Time Left: HH:MM:SS</h5>
              </div>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  This is my question number one, with four options below.
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="option a"
                    control={<Radio />}
                    label="a : option a"
                  />
                  <FormControlLabel
                    value="option b"
                    control={<Radio />}
                    label="b : option b"
                  />
                  <FormControlLabel
                    value="option c"
                    control={<Radio />}
                    label="c : option c"
                  />
                  <FormControlLabel
                    value="option d"
                    control={<Radio />}
                    label="d : option d"
                  />
                </RadioGroup>

                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                    },
                  }}
                >
                  <Chip icon={<ArrowBackIcon />} label="back" />
                  <Chip icon={<ArrowForwardIcon />} label="next" />
                  <Chip icon={<HighlightOffIcon />} label="quit quiz" />
                </Box>
                <Stack sx={{ alignItems: "center" }}>
                  <Pagination count={5} color="primary" />
                </Stack>
              </FormControl>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
export default Questions;

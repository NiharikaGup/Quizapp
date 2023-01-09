import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import image from "../images/question4.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Chip from "@mui/material/Chip";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { quizeQuestions } from "../data/quiz";

function Questions() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    state: { subSubjectId },
  } = location;

  const [questionList, setQuestionList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentNumber, setCurrentNumber] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let temp = quizeQuestions.filter(
      (item) => item.subCategoryId === subSubjectId
    );
    setCurrentQuestion(temp[0]);
    setQuestionList(temp);
  }, []);

  const handlePrevious = () => {
    let prevQuestion = currentNumber - 1;
    if (0 <= prevQuestion) {
      setCurrentQuestion(questionList[prevQuestion]);
      setCurrentNumber(prevQuestion);
    }
  };

  const handleNext = () => {
    let nextQuestion = currentNumber + 1;
    if (nextQuestion < questionList.length) {
      setCurrentQuestion(questionList[nextQuestion]);
      setCurrentNumber(nextQuestion);
    }
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
            <div className="page-header" style={{ textAlign: "center" }}>
              <h3>Question</h3>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <h5>Subject : 'Subject-name' &nbsp;&nbsp;</h5>
                <h5>Time Left: HH:MM:SS</h5>
              </div>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  {currentQuestion.question}
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
                  <Chip label="back" onClick={handlePrevious} />
                  <Chip label="next" onClick={handleNext} />
                  <Chip icon={<HighlightOffIcon />} label="quit quiz" />
                </Box>
              </FormControl>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
export default Questions;

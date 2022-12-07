import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";

function PrivateLayout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    let temLogin = window.localStorage.getItem("login") || false;
    if (!temLogin) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default PrivateLayout;

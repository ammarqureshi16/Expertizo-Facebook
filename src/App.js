import "./App.css";
import { Row, Col } from "react-bootstrap";
import Login from "./Screen/Login";
import SignUp from "./Screen/Sign-Up";
import { useState } from "react";
import Home from "./Screen/Home-Page";

function App() {
  const [screen, setScreen] = useState("signUp");
  const changeScreen = (currentScreen) => {
    setScreen(currentScreen);
  };
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          {/* <SignUp /> */}
          {screen === "signUp" && <SignUp changeScreen={changeScreen} />}
          {screen === "login" && <Login />}
        </Col>
        {/* <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <Login />
        </Col> */}
      </Row>
    </>
  );
}

export default App;

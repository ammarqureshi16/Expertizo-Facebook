import "./App.css";
import { Row, Col } from "react-bootstrap";
import Login from "./Screen/Login";
import SignUp from "./Screen/Sign-Up";
import { useEffect, useState } from "react";
import Home from "./Screen/Home-Page";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [screen, setScreen] = useState("signUp");
  const [userData, setUserData] = useState();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("User Data", user);
      } else {
        alert("Sorry");
      }
    });
  }, []);
  // const changeScreen = (currentScreen) => {
  //   setScreen(currentScreen);
  // };
  return (
    <>
      {auth ? (
        <>
          <Login />
        </>
      ) : (
        <SignUp />
      )}
      {/* <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          {screen === "signUp" && <SignUp changeScreen={changeScreen} />}
          {screen === "home" && <Home />}
        </Col>
      </Row> */}
    </>
  );
}

export default App;

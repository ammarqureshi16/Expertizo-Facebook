import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Screen/Sign-Up";
import Login from "./Screen/Login";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <SignUp />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <Login />
        </Col>
      </Row>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

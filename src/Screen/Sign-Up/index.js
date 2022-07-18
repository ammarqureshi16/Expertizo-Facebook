import React, { useState } from "react";
import "./index.css";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";
import { Row, Col, Container } from "react-bootstrap";
import { login, signUp } from "../../Config/firebase";
import { Oval } from "react-loader-spinner";
import Home from "../Home-Page";
import LoginPage from "../Login";

export default function SignUp(props) {
  const [form, setForm] = useState({});
  const [loader, setLoader] = useState(false);
  const [screen, setScreen] = useState(false);

  const value = (e, key) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const signup = async () => {
    setLoader(true);
    try {
      var result = await signUp(form);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {screen ? (
        <>
          <LoginPage />
        </>
      ) : (
        <Container>
          <Row className="Card-Main-RoW">
            <Col
              className="Sign-Up-Card-Col"
              xs={11}
              sm={11}
              md={11}
              lg={5}
              xl={5}
            >
              <Col
                className="heading-Col"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <h1>Sign Up </h1>
              </Col>
              <Row className="input-Main-Row">
                <Col
                  className="input-Col"
                  xs={11}
                  sm={11}
                  md={11}
                  lg={11}
                  xl={11}
                >
                  <Input
                    className="email-Input"
                    placeholder="Enter The Name:"
                    type={"text"}
                    onChange={(e) => value(e, "name")}
                  />
                </Col>
                <Col
                  className="input-Col"
                  xs={11}
                  sm={11}
                  md={11}
                  lg={11}
                  xl={11}
                >
                  <Input
                    onChange={(e) => value(e, "email")}
                    className="email-Input"
                    placeholder="Enter The Email :"
                    type={"email"}
                  />
                </Col>
                <Col
                  className="input-Col"
                  xs={11}
                  sm={11}
                  md={11}
                  lg={11}
                  xl={11}
                >
                  <Input
                    onChange={(e) => value(e, "password")}
                    className="email-Input"
                    placeholder="Enter The Password :"
                    type={"password"}
                  />
                </Col>
                <Col
                  className="button-Col"
                  xs={11}
                  sm={11}
                  md={11}
                  lg={11}
                  xl={11}
                >
                  {/* <Button  onClick={signup}
                  className="sign-Up-Button">
                   {loader ?
                    <>
                     <Oval height="30px" width="100%" color="red" /> 
                     </>
                   : Text="SignUp" }
                </Button> */}
                  <Button
                    onClick={signup}
                    className="sign-Up-Button"
                    Text={"SignUp"}
                  />

                  {/* {loader ? (
                  <Button
                    onClick={signup}
                    className="sign-Up-Button"
                    Text={"Sign-Up"}
                  />
                ) : (<Oval height="30px" width="100%" color="red" />)} */}
                </Col>
                <Col
                  xs={11}
                  sm={11}
                  md={11}
                  lg={11}
                  xl={11}
                  style={{ textAlign: "center" }}
                >
                  <p
                    onClick={() => {
                      setScreen(true);
                    }}
                  >
                    Go to SignUp
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

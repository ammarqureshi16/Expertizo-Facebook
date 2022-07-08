import React, { useState } from "react";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";
import { register, login } from "../../Config/firebase";

export default function SignUp(from) {
  // const [emailValue,setEmailValue] = useState("")
  // const [passwordValue,setPasswordValue] = useState("")
  const [form, setform] = useState({});

  const signup = () => {
    register(from);
  };
  const value = (e, key) => {
    setform({ ...form, [key]: e.target.value });
  };

  return (
    <>
      <Container>
        <Row className="Card-Main-RoW">
          <Col
            className="Sign-Up-Card-Col"
            xs={11}
            sm={11}
            md={11}
            lg={7}
            xl={7}
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
                  //   onChange={(e)=>{e, "name"}}
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
                  onChange={(e) => {
                    value(e, "email");
                  }}
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
                  onChange={(e) => {
                    value(e, "password");
                  }}
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
                <Button
                  onClick={signup}
                  className="sign-Up-Button"
                  Text={"Sign Up"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

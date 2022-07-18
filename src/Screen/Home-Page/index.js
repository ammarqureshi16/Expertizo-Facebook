import React, { useEffect, useState } from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import Button from "../../Components/Button/button";
import { getAuth, signOut } from "firebase/auth";
import CreateAdd from "../../Components/Creatwe-Add/create";
import { useSearchParams } from "react-router-dom";
import Login from "../Login";

export default function Home() {
  const [screen, setScreen] = useState(false);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Log out");
        setScreen(true);
      })
      .catch((error) => {
        // An error happened.
        alert("Masla");
      });
  };
  return (
    <>
      {screen ? (
        <>
          <Login />
        </>
      ) : (
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1>Hello Ammar Qureshi..</h1>
            <Button onClick={logout} Text={"Logout"} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <CreateAdd />
          </Col>
        </Row>
      )}
    </>
  );
}

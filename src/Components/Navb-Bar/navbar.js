import React from "react";
import "./navbar.css";
import { Row, Col } from "react-bootstrap";
import Olx from "../../Assets/Images/olx text.PNG";
import { IoIosCar } from "react-icons/io";
import { BiLayer } from "react-icons/bi";
import OlxBlack from "../../Assets/Images/olx black.PNG";
import Input from "../Input/input";
import { BiSearch } from "react-icons/bi";

export default function Navbar(props) {
  return (
    <>
      <Row className="main-Row-Navbar">
        <Col className="ol-Text-Col" xs={3} sm={3} md={3} lg={1} xl={1}>
          <img style={{ height: "50px", width: "100%" }} src={Olx} />
        </Col>
        <Col
          className="navbar-Icon-Main-Col"
          xs={8}
          sm={8}
          md={8}
          lg={3}
          xl={3}
        >
          <Col className="car-Icon-Col" xs={6} sm={6} md={6} lg={6} xl={6}>
            <IoIosCar size={35} />
            <lable>MOTORS</lable>
          </Col>
          <Col className="property-Col" xs={6} sm={6} md={6} xl={6} lg={6}>
            <BiLayer size={34} />
            <lable>PROPERTY</lable>
          </Col>
        </Col>
        <Row>
          <Col className="black-Olx" xs={3} sm={3} md={1} lg={1} xl={1}>
            <img src={OlxBlack} />
          </Col>
          <Col className="flex" xs={9} sm={9} md={9} lg={3} xl={3}>
            <Col
              className="select-Input-Col"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <BiSearch size={32} />
              <Input
                type={"select"}
                placeholder={"Select Location"}
                className="select-Input"
              />
            </Col>
          </Col>
          <Col className="flex" xs={12} sm={12} md={12} lg={7} xl={7}>
            <Input
              type={"text"}
              placeholder={"Search..."}
              className="search-Input"
            />
            <Col className="search-Icon-Col" xs={2} sm={2} md={2} lg={1} xl={1}>
              <BiSearch color={"white"} size={32} />
            </Col>
          </Col>
          <Col className="flex" xs={2} sm={2} md={2} lg={1} xl={1}>
            <label className="log-Out-Text" onClick={props.onClick}>
              {props.Text}
            </label>
          </Col>
        </Row>
        {/* <Row style={{border:"solid green"}}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <p>Ammar</p>
          </Col>
        </Row> */}
      </Row>
    </>
  );
}

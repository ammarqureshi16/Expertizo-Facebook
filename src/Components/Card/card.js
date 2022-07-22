import React from "react";
import "./card.css";
import { Row, Col } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";

export default function Card(props) {
  return (
    <>
      <Row className="flex">
        <Col className="card-Mein-Col" xs={12} sm={12} md={10} lg={10} xl={10}>
          <Row>
            <Col
              className="image-Col-Card"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <img src={props.Img} />
            </Col>
            <Col
              className="card-Work-Col"
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <Col
                className="text-Heart-Icon-Col"
                xs={12}
                sm={12}
                md={10}
                lg={12}
                xl={12}
              >
                <span className="card-Text">{props.Title}</span>
                <AiOutlineHeart className="heart-Icon" size={35} />
              </Col>
              <Col
                className="card-Last-Text"
                xs={12}
                sm={12}
                md={12}
                xl={12}
                lg={12}
              >
                <p className="card-Text">{props.Title}</p>
                <p style={{ marginTop: "50px" }}>{props.Text}</p>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

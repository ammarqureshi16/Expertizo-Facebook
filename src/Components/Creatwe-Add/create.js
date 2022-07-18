import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Input from "../Input/input";
import { userAdds } from "../../Config/firebase";

export default function CreateAdd() {
  const [userDeatail, setUserDeatail] = useState();

  const value = (e, key) => {
    setUserDeatail({ ...userDeatail, [key]: e.target.value });
  };

  const data = async () => {
    try {
      await userAdds(userDeatail);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1>Hello</h1>
          <Input
            onChange={(e) => {
              value(e, "title");
            }}
            placeholder="Title"
          />
          <Input
            onChange={(e) => {
              value(e, "desc");
            }}
            placeholder="Desc"
          />
          <Input
            onChange={(e) => {
              value(e, "price");
            }}
            placeholder="Price"
          />
          <button onClick={data}>Data</button>
        </Col>
      </Row>
    </>
  );
}

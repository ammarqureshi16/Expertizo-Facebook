import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { userAdds, getDta, getUser } from "../../Config/firebase";
import Input from "../Input/input";
import swal from "sweetalert";
import Button from "../Button/button"
import "./create.css"

export default function CreateAdd() {
  const [userDeatail, setUserDeatail] = useState();
  const [renderData, setRenderData] = useState([]);

  const value = (e, key) => {
    setUserDeatail({ ...userDeatail, [key]: e.target.value });
  };
  // console.log("Value-->>",userDeatail)

  const addsData = async () => {
    try {
      await userAdds(userDeatail);
    } catch (e) {
      await swal({
        title: e.message,
        text: "",
        icon: "warning",
        button: "Ok",
      });
    }
  };

  // const revice = async () => {
  //   var result = await getDta();
  //   setRenderData(result);
  //   // console.log("Add Collection Data Set In State -->>>", result[0].title);
  //   // console.log("milla--->>>", renderData);
  // };

//  const showEmail = async () => {
//     const result = await getUser();
//     setRenderData(result)
//     console.log("data--->>",result)
//     console.log("milla",renderData)
//   }
  return (
    <>
    <Row className="adds-Card-Main-Row">
      <Col className="add-Card-Col" xs={11} sm={11} md={3} lg={3} xl={3}>
        <Col className="heading-Col" xs={11} sm={12} md={12} lg={12} xl={12}>
        <h4 >Add Addss</h4>
        </Col>
        <Row className="input-Main-Row">
          <Col className="input-Col" xs={12} sm={12} md={11} lg={11} xl={11}>
          <Input
          className="title-Input"
            onChange={(e) => {
              value(e, "title");
            }}
            placeholder="Title :"
          />
          </Col>
          <Col className="input-Col" xs={12} sm={12} md={11} lg={11} xl={11}>
          <Input
          className="title-Input"
            onChange={(e) => {
              value(e, "price");
            }}
            placeholder="Price :"
          />
          </Col>
          <Col className="input-Col" xs={12} sm={12} md={11} lg={11} xl={11}>
          <Input
          className="title-Input"
            onChange={(e) => {
              value(e, "detail");
            }}
            placeholder="Detail :"
          />
          </Col>
          <Col className="button-Col" xs={12} sm={12} md={11} lg={11} xl={11} >
          <Button 
          className="submit-Button"
          onClick={addsData}
          Text={"Submit"}
          />
          </Col>

        </Row>
      </Col>
    </Row>
    </>
  );
}

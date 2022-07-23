import React, { useEffect, useState } from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import Button from "../../Components/Button/button";
import { getAuth, signOut } from "firebase/auth";
import { getDta } from "../../Config/firebase";
import CreateAdd from "../../Components/Creatwe-Add/create";
import Login from "../Login";
import swal from "sweetalert";
import Navbar from "../../Components/Navb-Bar/navbar";
import Cards from "../../Components/Card/card";
import AddImage from "../../Assets/Images/Add Image.PNG";
import SecAdd from "../../Assets/Images/add.PNG";
import Profile from "../User-Profile";

export default function Home(props) {
  const [screen, setScreen] = useState(false);
  const [renderData, setRenderData] = useState([]);

  const renderAdds = async () => {
    var result = await getDta();
    setRenderData(result);
    // console.log("Add Collection Data Set In State -->>>", result[0].title);
    // console.log("milla--->>>", renderData);
    return result;
  };
  renderAdds();

  const logout = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        swal({
          title: "Log Out!",
          text: "",
          icon: "success",
          button: "Ok",
        });
        setScreen(true);
      })
      .catch((e) => {
        swal({
          title: e.message,
          text: "",
          icon: "error",
          button: "Ok",
        });
      });
  };

  return (
    <>
      {screen ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <Profile />
          <Navbar onClick={logout} Text="Log Out" />
          <Row className="flex">
            <Col
              style={{ marginBottom: "15px" }}
              xs={12}
              sm={12}
              md={12}
              lg={11}
              xl={11}
            >
              <img
                style={{
                  height: "250px",
                  width: "100%",
                }}
                src={AddImage}
              />
            </Col>
            <Col
              className="flex"
              style={{ marginBottom: "25px" }}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
            >
              <img style={{ width: "100%" }} src={SecAdd} />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <CreateAdd />
            </Col>
            <Col
              className="fresh-Text-Col"
              xs={11}
              sm={11}
              md={11}
              lg={11}
              xl={11}
            >
              <h2>Fresh recommendations</h2>
            </Col>
            {renderData.map((item) => {
              return (
                <>
                  <Col xs={8} sm={8} md={4} xl={3} lg={3}>
                    <Cards
                      Title={item.title}
                      Text={item.price}
                      Detail={item.detail}
                    />
                  </Col>
                </>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
}

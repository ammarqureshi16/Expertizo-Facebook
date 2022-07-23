import React, { useState } from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import { uploadImages,updateProfile } from "../../Config/firebase"
// import { async } from "@firebase/util";

export default function Profile(props) {
    const [imageUrl,setImageUrl] = useState()
    // console.log("Image Url : ",imageUrl)
    // console.log("______>>>>",file)
    
    const submit = async () => {
        try {
          const url = await uploadImages(imageUrl)
            await updateProfile({ profilePic: url})
            alert("Kardee upload")
        } catch(e) {
            console.log("Error :",e.message)
        }
    }

  return (
    <>
      <Row className="profile-Card-Main-Row">
        <Col className="profile-Card-Col"
         xs={10} sm={10} md={3} lg={3} xl={3}>
            <Col className="profile-Heading"
             xs={12} sm={12} md={12} lg={12} xl={12}>
              <h1>Profile</h1>
            </Col>
          <Row className="profile-Input-Main-Row">
            <Col className="profile-Input-col"
             xs={12} sm={12} md={11} lg={11} xl={11}>
              <input className="profile-Inputs"
               type={"name"}
               placeholder="Enter your Name :" />
            </Col>
            <Col className="profile-Input-col"
             xs={12} sm={12} md={11} lg={11} xl={11}>
              <input 
               className="profile-Inputs"
               type={"file"}
               placeholder="Enter your profile image :" 
               onChange={(e)=>{setImageUrl(e.target.files[0])}}
               />
            </Col>
            <Col className="profile-Input-col"
             xs={12} sm={12} md={11} lg={11} xl={11}>
              <input className="profile-Inputs"
               type={"age"}
               placeholder="Enter your age :" />
            </Col>
            <Col className="button-Col"
             xs={12} sm={12} md={12} lg={12} xl={12}>
              <button 
               onClick={submit}
               className="submit-Button">
                  Submit
                </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

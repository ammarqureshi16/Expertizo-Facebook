import React from "react";

export default function CustomButton(props) {
  return (
    <>
      <button {...props}>
        {props.Text}
        {props.Icon}
      </button>
    </>
  );
}

import React, { useState } from "react";

export default function TextForm(props) {
  //function to convert to upper case text
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to Upper-case","success")
  };

  //function to convert to lowercase text
  const handlelowClick = () => {
    console.log("loowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to Lower-case","success")
  };

  //function to add changes
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  //function to copy the texts in the text area
  const handleCopy = () => {
    console.log("i am copy");
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","success")
  };

  //function to remove extra spaces in the text
  const handleExtraspaces = () => {
    console.log("remove extra spaces is selected ");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("enter your text here");
  //text="new text";-->wrong way to change the state of the textform component
  //setText('new text');-->correct way to change the state of the textform component

  // setText("new text")
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          convert to upper case
        </button>

        <button className="btn btn-warning mx-2" onClick={handlelowClick}>
          convert to lower case
        </button>
        <button type="button" className="btn btn-danger mx-5" onClick={handleCopy}>
          Copy text
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleExtraspaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3"  style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

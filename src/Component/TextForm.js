import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCaseClicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCase converted","success");
  }

  const handleLowClick = () => {
    // console.log("LowerCaseClicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase converted","success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleClearScr = () => {
    let newText = " " ;
    setText(newText);
    props.showAlert("Text Area cleared","success");
  }

  const handleCopy = () => {
    const tid = document.querySelector('#txtArea');
    // console.log("Selected");
    tid.select();
    navigator.clipboard.writeText(tid.value); 
    props.showAlert("Copied to clipboard","success");

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");

  }

  const [text,setText] = useState('');

  return (
    <>
    <div className={`container {props.mode=="dark"?"#2c3070":"white"}`}>
        <h1 style={{color:props.mode==="dark"?"white":"black"}}>{props.heading}</h1>
        <div className={`my-3 {props.mode=="dark"?"#2c3070":"white"}`}>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} id="txtArea" rows="8"></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-3" onClick={handleClearScr}>Clear Screen</button>

    </div>

    <div className='container my-3'>
      <h2>Your text summary : </h2>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <p>{0.008 * (text.split(" ").length-1)} minutes Reading Time</p>
      <p>{text.split('.').length-1} sentences</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text to preview it here ..."}</p>
    </div>
    </>
  )
}

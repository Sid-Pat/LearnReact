import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react';
import Alert from './Component/Alert';
import Contact from './Component/Contact';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#2c3070";
      showAlert("Dark Mode enabled","success");
      document.title = "TextUtils : DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtils :DarkMode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is amazing. Install now.";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Dark Mode disabled","success");
      document.title = "TextUtils : LightMode";

    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    
    <div className="container my-3">
    
    {/* <Routes> */}
    {/* <Route exact path="/about" element={<About />} /> */}
  
    
    {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>} /> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
    <br /><hr /><br />
    <About />
    
    {/* <Route exact path='/contact' element={<Contact/>}/> */}
    <Contact />


    {/* </Routes> */}
      </div>
      </div>
    {/* </Router> */}

    </>
  );
}

export default App;

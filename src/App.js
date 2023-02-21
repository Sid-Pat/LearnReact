import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react';

function App() {

  const [mode,setMode] = useState('light');

  return (
    <>
      <Navbar title="TextUtils" mode={mode} />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyse"/>
      </div>
    <hr></hr>
      <div className="container my-5">
        <About />
      </div>
    </>
  );
}

export default App;

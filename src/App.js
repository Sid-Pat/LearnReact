import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"  />

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

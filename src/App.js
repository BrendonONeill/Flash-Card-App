import React, { useState } from "react";
import './App.css';

function App() {

  const [isActive, setActive] = useState(false);
  const [isButton, setbutton] = useState(true);
  const [isNumber, setNumber] = useState(0);
  const pokemon = [
    "日",
    "山",
    "車",
  ]
  const back = [
    "Sun",
    "Mountain",
    "Car"
  ]
  const test = () => 
  {
    setActive(!isActive);
    setbutton(!isButton);
    if(isActive === true)
    {
      setTimeout(() => setNumber(isNumber + 1), 150)
    }
  }

  return (
    <>
    <div className='container'>
      <nav className="menu">
        <h1>Flash Cards</h1>
      </nav>
      <div className='card-container' onClick={test}>

      
      <div className={`card ${isActive ? "active" : ""}`}>
        <div className='card-front'>
        <div className="card-content">
          <h1>{pokemon[isNumber]}</h1>
          </div>
        </div> 

        <div className='card-back'>
          <div className="card-content">
          <h1>{back[isNumber]}</h1>
          <p>I sometimes go to mountains.</p>
          </div>
        </div> 
      </div>

      </div>
      <div className="button" onClick={test}>
      
        <h1>{isButton ? "Flip" : "Next"}</h1>
      </div>
      <footer className="menu">
      <h3>Brendon O'Neill 2022</h3>
    </footer>
  
    </div>

    
    </>
  );
}

export default App;

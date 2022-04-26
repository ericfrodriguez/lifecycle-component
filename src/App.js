import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Counter from './components/Counter';
import './App.css';


function App() {
  const [show, setShow] = useState(false);

  function handleToggleShow() {
    setShow(!show);
  }


  return (
    <div className="App">
      <h1>Contador</h1>
      {
        show && <Counter />
      }
      <button onClick={handleToggleShow}>
        {
          show
          ? 'Ocultar'
          : 'Mostrar'
        }
      </button>
    </div>
  );
}

export default App;

import React from 'react';
import Search from './Search';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <p>
        ʕ⊙ᴥ⊙ʔ
      </p>
      <img 
        src="./images/nasa.png" 
        alt="NASA logo" 
        id="nasa-logo-1"
        height="303" 
        width="1024" 
      />
      <Search/>
    </div>
  );
}

export default App;

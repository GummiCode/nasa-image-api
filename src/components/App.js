import React from 'react';
import Search from './Search';
import { GlobalStyles } from '../styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
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
    </>
  )
}

export default App;

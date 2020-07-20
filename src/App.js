import React from 'react';
import Mycars from "./Component/Mycars"

import './App.css';

function App() {
  return (
    <div className="App" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"10px 2em",alignSelf:"center"}}>
     <Mycars/>
     <Mycars/>
     <Mycars/>
     <Mycars/>
     <Mycars/>
     <Mycars/>
     <Mycars/>
     <Mycars/>
     <Mycars/>
     <Mycars/>
    </div>
  )
}

export default App;

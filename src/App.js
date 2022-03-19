import React from 'react';
import { useState } from 'react';

function App(){
    let [ counter, changeCounter ] = useState(1);
    //make changeCounter global
    window.changeCounter = changeCounter;
    return (
      <div>
        <h1>{counter}</h1>
        <h4>{counter}</h4>
      </div>
    )
}

export default App;

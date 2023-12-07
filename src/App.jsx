import React from 'react';
import './App.css';

function App(props) {
  const data  = props.imageData();
  return (
    <div id="app">
      <div id="header">
        <h1>Functional Component</h1>
      </div>
      <div id="grid">
        {data.map((e) => (
          <img key={e.id} src={e.img} alt="" />
        ))}
      </div>
    </div>
  );
}

export default App;
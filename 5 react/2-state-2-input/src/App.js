import { useState } from 'react';
import './App.css';

function App() {
  var [name, setName] = useState('');
  function onInputChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      Please enter your name: 
      <input type="text" onChange={onInputChange}></input>
    </div>
  );
}

export default App;

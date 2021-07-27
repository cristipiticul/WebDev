import { useState } from 'react';
import './App.css';

function App() {
  var [on, setOn] = useState(false);
  var img, text;
  if (on) {
    img = 'https://www.w3schools.com/js/pic_bulbon.gif';
    text = 'Turn Off';
  } else {
    img = 'https://www.w3schools.com/js/pic_bulboff.gif';
    text = 'Turn On'
  }

  function toggleOn(event) {
    setOn(!on);
  }

  return (
    <div className="App">
      <img src={img}></img>
      <button onClick={toggleOn}>{text}</button>
    </div>
  );
}

export default App;

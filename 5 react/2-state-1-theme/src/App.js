import './App.css';
import { useState } from 'react';

function App() {
  // V1: CSS Class
  var [theme, setTheme] = useState('light');
  function changeToLightTheme() {
    setTheme("light");
  }
  function changeToDarkTheme() {
    setTheme("dark");
  }
  return (
    <div class={theme}>
      <h1>Title</h1>
      <p>This is my awesome page</p>
      <div>
        <button onClick={changeToLightTheme}>Light theme</button>
        <button onClick={changeToDarkTheme}>Dark theme</button>
      </div>
    </div>
  );

  // V2: inline style
  // var [backgroundColor, setBackgroundColor] = useState("white");
  // var [textColor, setTextColor] = useState("black");
  // function changeToLightTheme() {
  //   setBackgroundColor("white");
  //   setTextColor("black");
  // }
  // function changeToDarkTheme() {
  //   setBackgroundColor("black");
  //   setTextColor("white");
  // }
  // return (
  //   <div style={{backgroundColor: backgroundColor, color: textColor}}>
  //     <h1>Title</h1>
  //     <p>This is my awesome page</p>
  //     <div>
  //       <button onClick={changeToLightTheme}>Light theme</button>
  //       <button onClick={changeToDarkTheme}>Dark theme</button>
  //     </div>
  //   </div>
  // );
}

export default App;

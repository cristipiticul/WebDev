import './App.css';
import { useState } from 'react';

function App() {
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
      <p id="pid">This is my awesome page</p>
      <div>
        <span class="button" onClick={changeToLightTheme}>Light theme</span>
        <span class="button" onClick={changeToDarkTheme}>Dark theme</span>
      </div>
    </div>
  );
}

export default App;

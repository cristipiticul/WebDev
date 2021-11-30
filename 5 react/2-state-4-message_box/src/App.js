import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  function addToCart() {
    setMessage("Item was added successfuly to the cart");
  }
  function register() {
    setMessage("Registration successful");
  }
  function hidePopup() {
    setMessage("");
  }

  return (
    <div className="App">
      <button onClick={addToCart}>Add to cart</button>
      <button onClick={register}>Register</button>
      {message != "" ?
        <div id="gray">
          <div id="popup_box">
            {message}
            <br/>
            <br/>
            <button id="popup_ok" onClick={hidePopup}>Ok</button>
          </div>
        </div> : ""}
    </div>
  );
}

export default App;

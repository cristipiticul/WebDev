import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/"><h1>Home!</h1></Route>
          <Route path="/about"><h1>About!</h1></Route>
        </Switch>
      </div>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <div>
//           <Switch>
//             <Route exact path="/">
//               <input type="text" placeholder="Email"/><br/>
//               <input type="password" placeholder="Password"/><br/>
//               <button>Login</button>
//               <button><Link to="/register">Register</Link></button>
//             </Route>
//             <Route path="/register">Register page!</Route>
//           </Switch>
//       </div>
//     </Router>
//     );
// }

export default App;

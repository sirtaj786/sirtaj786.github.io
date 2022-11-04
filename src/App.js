import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
// import { Github } from "./components/Github/Github";
// import Statics from "./components/Github/Statics";

function App() {
  return (
    // <>
     <Router>
      <Home />
     </Router>
   
    // </>
  );
}

export default App;

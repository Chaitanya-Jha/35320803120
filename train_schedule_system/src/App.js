import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllTrains from "./components/AllTrains";
// import SingleTrain from "./components/SingleTrain";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact component={AllTrains} />
          {/* <Route path="/trains/:id" component={SingleTrain} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

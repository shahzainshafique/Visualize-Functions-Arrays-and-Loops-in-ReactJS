import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="containers">
        <div className="contents">
          <h3> Please select the compiler you want to try out today!</h3>

          <Link to="/function" style={{ textDecoration: "none" }}>
            {/*Link to function component */}
            <button className="run">Function</button>
          </Link>
          <Link to="/loop" style={{ textDecoration: "none" }}>
            {/*Link to loop component */}
            <button className="run">Loop</button>
          </Link>
          <Link to="/ifelse" style={{ textDecoration: "none" }}>
            {/*Link to ifelse component */}
            <button className="run">If-Else</button>
          </Link>
          <Link to="/array" style={{ textDecoration: "none" }}>
            {/*Link to array component */}
            <button className="run">Array</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;

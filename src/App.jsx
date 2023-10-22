import React from "react";
import Start from "./pages/Start";
import {Route,Routes as Router} from "react-router-dom"
import Inner from "./pages/Inner";

const App = () => {
  return (
    <Router>
      <Route path="/" element={<Start />} />
      <Route  path="/inner" element={<Inner />} />
    </Router>
  );
};

export default App;

import React, {useState} from 'react';
import Welcome from "./pages/Welcome";
import Login  from "./pages/Login";
import Reg from "./pages/Reg";
import {Route, Link} from "react-router-dom";

function App() {

    return(
      <div className="App">
        <h1>hey there</h1>
        <Login/>

      </div>
    );
}

export default App;

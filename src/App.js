import React, {useState} from 'react';
import Welcome from "./pages/Welcome";
import Login  from "./pages/Login";
import Reg from "./pages/Reg";
import {Routes, Route, Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

function App() {

    return(
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Welcome/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Reg/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    );
}

export default App;

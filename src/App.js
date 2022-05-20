import React, {useState} from 'react';
import Welcome from "./pages/Welcome";
import Login  from "./pages/Login";
import Reg from "./pages/Reg";
import PageNotFound from "./pages/PageNotFound"
import {Routes, Route, Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";

function App() {
    return(
      <div className="App">
          <BrowserRouter>
              <Routes>

                  <Route path="/" element={<Welcome/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Reg/>}/>
                  <Route path="/404" element={<PageNotFound/>}/>
                  <Route path="*" element={<PageNotFound/>}/>
                  <Route path="" element={<PageNotFound/>}/>
                  <Route element={<PageNotFound/>}/>
                  <Route path="/shop"/>
              </Routes>
          </BrowserRouter>

      </div>
    );
}

export default App;
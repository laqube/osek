import React, {useState} from 'react';
import Welcome from "./pages/Welcome";
import Login  from "./pages/Login";
import Reg from "./pages/Reg";
import Shop from "./pages/Shop"
import PageNotFound from "./pages/PageNotFound"
import {Routes, Route, Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import {Navbar} from "react-bootstrap";
import { AuthContextProvider } from './context/AuthContext';



function App() {
    return(
      <div className="App">
          <BrowserRouter>
          <AuthContextProvider>
              <Routes>
                  <Route path="/" element={<Welcome/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Reg/>}/>
                  <Route path="/404" element={<PageNotFound/>}/>
                  <Route path="*" element={<PageNotFound/>}/>
                  <Route path="" element={<PageNotFound/>}/>
                  <Route element={<PageNotFound/>}/>
                  <Route path="/shop" element={<Shop/>}/>
                  <Route path='/account'element={<ProtectedRoute><Account /></ProtectedRoute>}/>
              </Routes>
              </AuthContextProvider>
          </BrowserRouter>

      </div>
    );
}

export default App;
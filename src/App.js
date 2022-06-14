import React, {useState} from 'react';
import Welcome from "./pages/Welcome";
import Login  from "./pages/Login";
import Reg from "./pages/Reg";
import ShopNew from "./pages/Shop.new"
import ShopMen from "./pages/Shop.men"
import ShopWomen from "./pages/Shop.women"
import ShopKids from "./pages/Shop.kids"
import PageNotFound from "./pages/PageNotFound"
import {Routes, Route, Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import {Navbar} from "react-bootstrap";
import { AuthContextProvider } from './context/AuthContext';
import Accountlayout from "./pages/Accountlayout";


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
                  <Route path="/shop/new" element={<ShopNew/>}/>
                  <Route path="/shop/men" element={<ShopMen/>}/>
                  <Route path="/shop/women" element={<ShopWomen/>}/>
                  <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
                  <Route path="/shop/kids" element={<ShopKids/>}/>
                  <Route path="/accountlay" element={<ProtectedRoute><Accountlayout/></ProtectedRoute>}/>
                  {/*working on account page design, that is why i made in unprotected*/}
                  {/*<Route path='/account'element={<ProtectedRoute><Account /></ProtectedRoute>}/>*/}
              </Routes>
              </AuthContextProvider>
          </BrowserRouter>

      </div>
    );
}

export default App;
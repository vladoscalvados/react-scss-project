import React, {Component} from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Tours from "./components/Tours/Tours";
import {BrowserRouter, Route} from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";

const App = () => {
        return (
            <div>
                <Navbar/>
                <Route path={'/home'}>
                    <Home/>
                </Route>
                <Route path={'/about'}>
                    <About/>
                </Route>
               <Route path={'/tours'}>
                   <Tours/>
               </Route>

            </div>
        );
    }

export default App;

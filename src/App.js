import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NavBar from "./NavBar";
import { Route, Switch, Redirect } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/about" component={About} />        
    </div>
  );
}

export default App;

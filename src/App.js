import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'react-popper';
import {Route,Link} from  'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Home />
      <Footer />
      </div>
    );
  }
}

export default App;

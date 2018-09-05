import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar , NavbarBrand,Button } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar dark color="primary">
       <div className="container">
       <NavbarBrand href= "/">Demo of Con Fusion </NavbarBrand>
       <div> 
       <Button className="refreshButton">Refresh</Button>
       <Button className="saveButton">Cancel</Button>
       <Button className="cancelButton">Save</Button>
       </div>
       
       </div>
       </Navbar>
      </div>
    );
  }
}

export default App;

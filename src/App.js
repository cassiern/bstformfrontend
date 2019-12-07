import React, { Component } from 'react';
import './App.css';
import Auth from './components/Auth';
import Main from './components/Main';
import Navbar from './components/navbar/navbar';
import './public/style.css';
import './style.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			isLogged: false
		}
	}  
render(){
  return (
    <div className="background">
    <Navbar />
    {this.state.isLogged ? <Main /> : <Auth isLogged={this.state.isLogged}/> }
    </div>
  );
}
}
export default App;

import React, { Component } from 'react';
import './App.css';
import Auth from './components/Auth';
import Main from './components/Main';
import Navbar from './components/navbar/navbar';
import Profile from './components/users/Profile'
import './public/style.css';
import './style.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLogged: false,
      currentUser: {},
      showUserProfile: false
    }
  }  

  logout = async (e) => {
    e.preventDefault();

    const logoutUser = await fetch('http://localhost:9000/user/logout');
    console.log(logoutUser, '<-- LOGOUT USER COMING FROM EXPRESS')
    this.setState({
      isLogged: false,
      currentUser: {}
    })
    console.log(this.state, '<-- this is state after logging out')
  }

  showProfile = (e) => {
    e.preventDefault();
    this.setState({
      showUserProfile: true
    })
    console.log(this.state, '<-- profile has been clicked and passed to APP')
  }


  getCurrentUser = (currentUser)=>{
    this.setState({
      currentUser:currentUser,
      //isLogged: true
    })
      console.log(currentUser, "<--- currentUser in APP")

  }
render(){
  return (
    <div className="background">
    <Navbar logout={this.logout} showProfile={this.showProfile}/>
    {this.state.currentUser.isLogged ?
      <Main />
      : 
      <Auth passCurrentUser = {this.getCurrentUser}/> 
    }
    <div>
      {this.state.showUserProfile && this.state.isLogged ?
        <Profile currentUser={this.state.currentUser}/>
        :
        null
      }
    </div>
    </div>
  );
}
}
export default App;
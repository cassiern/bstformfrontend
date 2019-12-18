import React, { Component } from 'react';
import { Route, Switch ,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Main from './components/Main';
import Navbar from './components/navbar/navbar';
import Profile from './components/users/Profile';
import './public/style.css';
import './style.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLogged: false,
      currentUser: {}
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
        <Navbar logout={this.logout} />
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => <Auth passCurrentUser = {this.getCurrentUser}/>}/>
            <Route exact path='/home' render={() => <Main /> } />
            <Route exact path='/profile' render={() => <Profile /> }/>
          </Switch>
        </Router>


    </div>

    // {this.state.currentUser.isLogged ?
    //   <Main />
    //   : 
    //   <Auth passCurrentUser = {this.getCurrentUser}/> 
    // }

  );
}
}
export default App;
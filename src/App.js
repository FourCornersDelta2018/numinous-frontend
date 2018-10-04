import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/destinations/home'
import Navbar from './components/navbar'
import AuthService from './services'
import RegistrationPage from './pages/registration'
import Login from './pages/login'
import MyEpic from './pages/destinations/myepic'
import Show from './pages/destinations/show'
import About from './pages/about'
import Footer from './components/footer'
import './App.css'

class App extends Component {
  render() {
      let auth = new AuthService()
    return (
      <div>
        <Navbar />
            <Router>
                {(auth.loggedIn())
                ? <Switch>
                    <Route exact path="/myepic" component={MyEpic} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/show" component={Show} />
                    <Route path="/" component={Home} />
                </Switch>
                : <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/registration" component={RegistrationPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/show" component={Show} />
                    <Route path="/" component={Home} />
                </Switch>}
            </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

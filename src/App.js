import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Monitor from './components/Monitor';
import LullabyStation from './components/LullabyStation';
import Navbar from './components/NavigationBar';
{/*importing all the pages and different components*/}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*Set up the routings for our URL, and their corresponding webpage,
            also importing the Navbar from our custom components
          */}
          <Navbar />
          <Route exact path = "/" component = {Home} />
          <Route path = "/monitor" component = {Monitor} />
          <Route path = "/lullabystation" component = {LullabyStation} />
        </div>
      </Router>
    );
  }
}

export default App;

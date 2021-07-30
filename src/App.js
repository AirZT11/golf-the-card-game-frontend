import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/App.css';
import './css/navBar.css'
import GameContainer from './components/containers/GameContainer'
import NavBar from './components/containers/NavBar';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>

        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={GameContainer} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;

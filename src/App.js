import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Germancars from './Germancars';
import Luxurycars from './Luxurycars';
import Londoncars from './Londoncars';
import Americancars from './Americancars';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Germancars} />
          <Route path='/products' component={Luxurycars} />
          <Route path='/products' component={Londoncars} />
          <Route path='/products' component={Americancars} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
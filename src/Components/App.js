import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Germancars from './Pages/Germancars';
import Luxurycars from './Pages/Luxurycars';
import Londoncars from './Pages/Londoncars';
import Americancars from './Pages/Americancars';
import Login from './Login';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/german-cars' component={Germancars} />
          <Route path='/luxury-cars' component={Luxurycars} />
          <Route path='/london-cars' component={Londoncars} />
          <Route path='/american-cars' component={Americancars} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
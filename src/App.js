import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Germancars from './Pages/Germancars';
import Luxurycars from './Pages/Luxurycars';
import Londoncars from './Pages/Londoncars';
import Americancars from './Pages/Americancars';
import Login from './Components/Login';
import { ThemeProvider } from './Components/ThemeContext';

function App() {
  return (
    <>
    <ThemeProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/germancars' component={Germancars} />
          <Route path='/luxurycars' component={Luxurycars} />
          <Route path='/londoncars' component={Londoncars} />
          <Route path='/americancars' component={Americancars} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </ThemeProvider> 
    </>
  );
}

export default App;
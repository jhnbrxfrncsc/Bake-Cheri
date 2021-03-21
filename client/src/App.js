import React from 'react';

// React-Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import Custom from './pages/Custom/Custom';
import Menu from './pages/Menu/Menu';

function App() {
  return (
    <Router>
      <Header />
      
      <Switch>
        {/* HOME ROUTE */}
        <Route path="/" exact>
          <Home />
        </Route>
        {/* CONTACT US ROUTE */}
        <Route path="/contact" exact>
          <Contact />
        </Route>
        {/* MENU ROUTE */}
        <Route path="/menu">
          <Menu />
        </Route>
        {/* CUSTOM ORDER ROUTE */}
        <Route path="/custom">
          <Custom />
        </Route>
      </Switch>
      
      <Footer /> 
    </Router>
  );
}

export default App;

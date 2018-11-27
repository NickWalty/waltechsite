import React, { Component } from 'react';
import './css/main.css'; //Import compiled SCSS file
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
//Import Wrappers
import Menu from './Menu';
import Footer from './Footer';
//Import pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioDisplay from './pages/PortfolioDisplay';
import Assets from './pages/Assets';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className = 'main'>
        <Menu />
          <Switch>
            <Route path='/' exact component = {Home}/>
            <Route path='/portfolio' exact component = {Portfolio}/>
            <Route path='/portfolio/:id' exact component = {PortfolioDisplay}/>
            <Route path='/assets' exact component = {Assets}/>
            <Route path='/contact' exact component = {Contact}/>
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

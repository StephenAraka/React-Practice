import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import ProductsPage from './components/pages/Products';

import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Products' component={ProductsPage} />
          <Footer/>
        </div>
      </Router>
    );
  }
}
 
export default App;

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import HomePage from './HomePage.js';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import CreatePage from './CreatePage.js';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/quarterbacks" exact component={ListPage} />
            <Route path="/quarterbacks/:quarterbackId" exact component={DetailPage} />
            <Route path="/create" exact component={CreatePage} />
        </Router>
    </div>
  );
}

export default App;

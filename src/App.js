import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookHeader from './components/BookHeader';
import Search from './components/Search';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Route exact path="/" component={BookHeader} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
);

export default App;
import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import HatsPage from './pages/hats/hats.component';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;

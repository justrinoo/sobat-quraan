import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import WhySobat from './pages/WhySobat';


function App() {
  return (
    <Switch>
    <div className="App">
      <Route path="/" component={WhySobat} />
    </div>
    </Switch>
  );
}

export default App;

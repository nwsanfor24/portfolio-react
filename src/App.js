import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import "./App.css";
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
  return (
  <HashRouter basename='/'>
    <CssBaseline />
    <Route exact path="/" component={Home}/>
    <Route exact path="/resume" component={Resume}/>
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/contacts" component={Contacts} />
  </HashRouter>
  );
}

export default App;

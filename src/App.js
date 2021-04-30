import React from 'react';
import {HashRouter, Route}from 'react-router-dom';
import Header from './header';


function App() {
  return (
    <HashRouter>
      <Route  path="/" component={Header}/>
   
    </HashRouter>
  );
}

export default App;

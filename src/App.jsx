import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import CustomizeImage from './pages/CustomizeImage';
import Home from './pages/Home'
import Temperature from './pages/Temperature'

function App() {

  return (
    <div className="App">
      <Nav/>
      <div className="main">      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/temperature" component={Temperature} />
          <Route exact path="/customize-image" component={CustomizeImage} />
        </Switch>
      </div>
    </div>
  )
} 

export default App

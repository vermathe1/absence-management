import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Home } from './sections/home'
import { NotFound } from './sections/notfound'

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path = "/" component = { Home } />
        <Route component ={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render( <App />,document.getElementById('root') );
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Home } from './sections/home'
import { NotFound } from './sections/notfound'

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path = "/home" component = { Home } />
        {/* <Route 
            exact 
            path = "/user/:id"  
            render = { props => <User {...props} setViewer={setViewer}  />}
        />
        <Route exact path = "/host" component = { Host } />
        <Route exact path = "/listing/:id" component = { Listing } />
        <Route exact path = "/listings/:location?" component = { Listings } />
        <Route 
          exact 
          path = "/login" 
          render = { props => <Login {...props} setViewer={setViewer} /> } 
        /> */}
        <Route component ={NotFound} />
      </Switch>
    </Router>

  )
}

ReactDOM.render( <App />,document.getElementById('root') );
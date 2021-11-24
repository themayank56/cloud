import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Acomponent/Home'
import About from './Acomponent/About'
import Services from './Acomponent/Services'
import Navbar from './Acomponent/Navbar'
import Footer from './Acomponent/Footer'

import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'

function App() {
  return (
    <>
       <Router>
      <Navbar />
        <main> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            
           
          </Switch>
      <Footer />
        </main>
    </Router>
    </>
  );
}

export default App;


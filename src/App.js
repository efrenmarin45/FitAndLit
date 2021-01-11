import Navbar from './components/navbar/index';
import React from 'react'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages'; 
import Solutions from './Pages/Solutions';
import About from './Pages/About';
import Transformations from './Pages/Transform';
import Contact from './Pages/Contact'; 


function App() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/solutions" exact component={Solutions} />
                <Route path="/transformations" exact component={Transformations} />
                <Route path="/Contact" exact component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;
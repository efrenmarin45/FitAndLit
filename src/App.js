import Navbar from './components/navbar/index';
import React from 'react'; 
import {BrowserRouter as Router, Switch} from 'react-router-dom';   


function App() {
    return(
        <Router>
            <Navbar />
        </Router>
    );
}

export default App;

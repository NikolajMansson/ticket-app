import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Ticket from './pages/Ticket';
import Addticket from './pages/Addticket';

function App() {

    return (
 <Router>
   <Switch>
     <Route exact path="/" component={Ticket} />
     <Route path="/add-ticket" component={Addticket} />
   </Switch>
 </Router>
    );
  
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Ticket from './pages/Ticket';
import Addticket from './pages/Addticket';
import Editticket from './pages/Editticket';
import Viewcomment from './pages/Viewcomment';

function App() {

    return (
 <Router>
   <Switch>
     <Route exact path="/" component={Ticket} />
     <Route path="/add-ticket" component={Addticket} />
     <Route path="/view-comment/:id" component={Viewcomment} />
     <Route path="/edit-ticket/:id" component={Editticket} />
   </Switch>
 </Router>
    );
  
}

export default App;


// import Topic from './Topic.js';
import './App.css';
import Postdetails from './Post-details.js';
import Postpage from './Stationpost.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        
        <Switch>
            <Route exact path='/' component={Postpage} />
            <Route  path='/Posts' component={Postpage} />
            {/* <Route path='/pins' component={Pincard} /> */}
            <Route path='/post-details' component={Postdetails} />
        </Switch>
      </Router>
       {/* <Postdetail/>  */}
        {/* <Topic/> */}
        {/* <Stationpost/> */}
        {/* <Postpage/>  */}
    </div>
  );
}

export default App;

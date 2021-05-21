import React from 'react';
import {Home} from './component/Home';
import {Login} from './component/Login';
import {Counter} from './component/Counter';
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/counter'>Counter</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/counter' exact component={Counter}/>
        </Switch>
      </Router>
    </React.Fragment>
  );  
}

export default App;
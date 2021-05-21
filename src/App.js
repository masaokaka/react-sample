import React from 'react';
import {Home} from './component/Home';
import {Login} from './component/Login';
import {Counter} from './component/Counter';
import {Nopath} from './component/Nopath';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 } from 'react-router-dom';


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
                <Link to='/login/777'>Login</Link>
              </li>
              <li>
                <Link to='/counter/11'>Counter</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login/:id' exact component={Login}/>
          <Route path='/counter/:num' exact component={Counter}/>
          
          {/* path指定がないと、指定のないURLに対して返される画面が作れる */}
          <Route component={Nopath}/>
        </Switch>
      </Router>
    </React.Fragment>
  );  
}

export default App;
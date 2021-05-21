import React from 'react'
import { Container} from '@material-ui/core'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Header} from './component/Header'
import {Footer} from './component/Footer'
import {Todos} from './component/Todos'
import {TodoInfo} from './component/TodoInfo'
import {AddTodo} from './component/AddTodo.js'

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Container maxWidth="Md">
        <Router>
          <Switch>
            <Route path='/' exact component={Todos}/>
            <Route path='/addtodo' exact component={AddTodo}/>
            <Route path='/todoinfo/:id' exact component={TodoInfo}/>
          </Switch>
        </Router>
      </Container>
      <Footer/>
    </React.Fragment>
  );  
}

export default App;
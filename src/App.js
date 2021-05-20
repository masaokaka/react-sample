import React from 'react';
import { connect } from 'react-redux';
import { inputData , addToTodoList } from './actions';

const App = (props) => {
  return (
    <React.Fragment>
      {props.todos.map((todo,index) => (
        <div key={index}>
          <p>ID:{todo.id} テキスト：{todo.value}</p>
          <button>削除</button>
        </div>
      ))}
      <input type="text" onChange={props.inputData}/>
      <button onClick={props.addToTodoList}>追加</button>
    </React.Fragment>
  );  
}

const mapStateToProps = state => ({
  todos: state.todo.todos
})

const mapDispatchToProps = dispatch => ({
  inputData:(e)=>dispatch(inputData(e)),
  addToTodoList:()=>dispatch(addToTodoList())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React from 'react';
import { connect } from 'react-redux';
import { inputData , addToTodoList, doneTodo, deleteTodo } from './actions';

const App = (props) => {
  return (
    <React.Fragment>
      <h2>ToDoリスト</h2>
      <div className="container">
      {props.todos.map((todo, index) =>
        todo.flg ? (
          <div key={index}>
            <del>
              <span>ID:{todo.id} テキスト：{todo.value}</span>
              <input type="checkbox" onChange={(() => { props.doneTodo(index) })} checked={todo.flg}/>
              <button onClick={(() => { props.deleteTodo(index) })}>削除</button>
            </del>
          </div>
        ) : (
          <div key={index}>
            <span>ID:{todo.id} テキスト：{todo.value}</span>
            <input type="checkbox" onChange={(() => { props.doneTodo(index) })} checked={todo.flg}/>
            <button onClick={(() => { props.deleteTodo(index) })}>削除</button>
          </div>
        )
      )}
        <input type="text" onChange={props.inputData} value={props.value}/>
        <button onClick={props.addToTodoList}>追加</button>
      </div>
    </React.Fragment>
  );  
}

const mapStateToProps = state => ({
  todos: state.todo.todos,
  value: state.todo.value
})

const mapDispatchToProps = dispatch => ({
  inputData:(e)=>dispatch(inputData(e)),
  addToTodoList:()=>dispatch(addToTodoList()),
  doneTodo:(index)=>dispatch(doneTodo(index)),
  deleteTodo:(index)=>dispatch(deleteTodo(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
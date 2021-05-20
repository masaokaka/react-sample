import React from 'react';
import { connect } from 'react-redux';
import { inputData , addToTodoList, doneTodo } from './actions';

const App = (props) => {
  return (
    <React.Fragment>
      <h2>ToDoリスト</h2>
      {props.todos.map((todo, index) =>
        todo.flg ? (
          <div key={index}>
            <del>
              <p>
                ID:{todo.id} テキスト：{todo.value}
              </p>
              <input type="checkbox" onChange={(() => { props.doneTodo(index) })} checked={todo.flg}/>
              <button>削除</button>
            </del>
          </div>
        ) : (
            <div key={index}>
            <p>
              ID:{todo.id} テキスト：{todo.value}
            </p>
              <input type="checkbox" onChange={(() => { props.doneTodo(index) })} checked={todo.flg}/>
            <button>削除</button>
          </div>
        )
      )}
      <input type="text" onChange={props.inputData} value={props.value}/>
      <button onClick={props.addToTodoList}>追加</button>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
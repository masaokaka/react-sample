import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { fetchData, inputData , addToTodoList, doneTodo, deleteTodo } from './actions';

//useSlector
const todosSelector = state => state.todo.todos;
const valueSelector = state => state.todo.value;

const App = (props) => {
  const dispatch = useDispatch()
  const todos = useSelector(todosSelector)
  const value = useSelector(valueSelector)
  //マウント時に実行
  useEffect(() => {
    if (localStorage.data) {
      let data = localStorage.getItem('data')
      data = JSON.parse(data)
      dispatch(fetchData(data))
    }
  }, [])
  return (
    <React.Fragment>
      <h2>ToDoリスト</h2>
      <div className="container">
      {todos.map((todo, index) =>
        todo.flg ? (
          <div key={index}>
            <del>
              <span>ID:{todo.id} テキスト：{todo.value}</span>
              <input type="checkbox" onChange={(() => { dispatch(doneTodo(index)) })} checked={todo.flg}/>
              <button onClick={(() => { dispatch(deleteTodo(index)) })}>削除</button>
            </del>
          </div>
        ) : (
          <div key={index}>
            <span>ID:{todo.id} テキスト：{todo.value}</span>
              <input type="checkbox" onChange={(() => { dispatch(doneTodo(index)) })} checked={todo.flg}/>
              <button onClick={(() => { dispatch(deleteTodo(index)) })}>削除</button>
          </div>
        )
      )}
        <input type="text" onChange={((e) => { dispatch(inputData(e)) })} value={value}/>
        <button onClick={(() => { dispatch(addToTodoList()) })}>追加</button>
      </div>
    </React.Fragment>
  );  
}


// const mapStateToProps = state => ({
//   todos: state.todo.todos,
//   value: state.todo.value
// })

// const mapDispatchToProps = dispatch => ({
//   fetchData:(todos)=>dispatch(fetchData(todos)),
//   inputData:(e)=>dispatch(inputData(e)),
//   addToTodoList:()=>dispatch(addToTodoList()),
//   doneTodo:(index)=>dispatch(doneTodo(index)),
//   deleteTodo:(index)=>dispatch(deleteTodo(index)),
// })

export default App;
//connect(mapStateToProps, mapDispatchToProps)(
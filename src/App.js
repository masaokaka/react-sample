import React,{ useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchData , addToTodoList, doneTodo, deleteTodo } from './actions';

//useSlector
const todosSelector = state => state.todo.todos;

const App = () => {
  const dispatch = useDispatch()
  const todos = useSelector(todosSelector)
  const [val,setVal] = useState('')

  //マウント時に実行
  useEffect(() => {
    if (localStorage.data) {
      let data = localStorage.getItem('data')
      data = JSON.parse(data)
      dispatch(fetchData(data))
    }
  }, [])

  //todosに変化があったときのみinputタグ内のテキストを削除
  useEffect(() => {
    setVal('')
  }, [todos])
  
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
        <input type="text" onChange={((e)=>{setVal(e.target.value)})} value={ val }/>
        <button onClick={(() => { dispatch(addToTodoList(val)) })}>追加</button>
      </div>
    </React.Fragment>
  );  
}

export default App;
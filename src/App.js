import React, { useState } from 'react';
import './App.css';


const App = () => {
  return (
    <div className="container">
      <h1>ToDoリスト</h1>
      <ToDoForm />
    </div>
  )
}

const ToDoForm = () => {
  //再度レンダリングされた後、ステートの値が更新された後のタイミングでローカルストレージに上書きするようにしてやると一回ですむ。
  const componentDidUpdate = (() => {
    saveLocal(todos)
  })
  const saveLocal = (todos) => {
      todos = JSON.stringify(todos);
      localStorage.setItem("todos", todos);
  }
  let todolist = []
  if (localStorage.todos) {
    todolist = JSON.parse(localStorage.getItem('todos'))
  } else {
    todolist = [];
  }
  // todo用のstate(配列)
  const [todos, setTodo] = useState(todolist);
  //タスク用のstate
  const [task, setTask] = useState('');
  const createTask = (e) => {
    setTask(e.target.value)
  }
  const addTask = (callback) => {
    if (task === '') {
      return
    } else {
      setTodo((prevTodos) => [...prevTodos, { title: task, flg: false }])
      callback(todos)
      setTask("")
    }
  }
  const checkTask = index => {
    const newTodos = [...todos]
    newTodos[index].flg = !newTodos[index].flg;
    setTodo(newTodos)
  }
  const removeTask = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodo(newTodos)
  }

  return (
    <React.Fragment>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.flg ? <del>{todo.title}</del> : <span>{todo.title}</span>}
            <input
              type="checkbox"
              checked={todo.flg}
              onChange={() => {
                checkTask(index);
              }}
            />
            <button
              onClick={() => {
                removeTask(index);
              }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
      <input type="text" value={task} onChange={createTask}/>
      <button onClick={(() => { addTask(componentDidUpdate) })}>追加</button>
    </React.Fragment>
  );
}
export default App;
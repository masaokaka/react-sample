import React,{ useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchData , addToTodoList, doneTodo, deleteTodo } from './actions';
import { IconButton,Container,TextField,Checkbox,Grid} from '@material-ui/core'
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core'
import { AddCircle,Delete } from '@material-ui/icons';


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
    <Container maxWidth="Md">
      <h2>ToDoリスト</h2>
      {todos.length!==0 &&
      <TableContainer component={Paper}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">テキスト</TableCell>
            <TableCell align="center">機能</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {todos.map((todo, index) =>
          <TableRow key={index}>
            <TableCell align="center">{todo.id}</TableCell>
            {todo.flg ? 
            <TableCell align="center"><del>{todo.value}</del></TableCell>
            :
            <TableCell align="center"><span>{todo.value}</span></TableCell>
            }
            <TableCell align="center">
              <Checkbox color="primary" type="checkbox" onChange={(() => { dispatch(doneTodo(index)) })} checked={todo.flg}/>
              <IconButton variant="contained" onClick={(() => { dispatch(deleteTodo(index)) })}>
                <Delete/>
              </IconButton>
            </TableCell>
          </TableRow>
        )}
        </TableBody>
        </Table>
        </TableContainer>
        }
        <Grid container justify="center" alignItems="center">
          <Grid item md={3}>
            <TextField variant="outlined" label="todoを入れてください" type="text" onChange={((e)=>{setVal(e.target.value)})} value={ val }/>
          </Grid>
          <Grid item md={1}>
            <AddCircle style={{fontSize:30}} color="primary" onClick={(() => { dispatch(addToTodoList(val)) })}></AddCircle>
          </Grid>
        </Grid>
    </Container>
  );  
}

export default App;
import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToTodoList } from '../actions';
import { InputLabel,Input} from '@material-ui/core'
import { AddCircle } from '@material-ui/icons';

export const AddTodo = () => {
    const dispatch = useDispatch()
    const [ticket,setTicket] = useState()
    const [text,setText] = useState()
    const [person,setPerson] = useState()
    const [duedate,setDuedate] = useState()
    const [startdate,setStartdate] = useState()

    const addTodo = ()=>{
        dispatch(addToTodoList(
            {
                ticket:ticket,
                text:text,
                person:person,
                duedate:duedate,
                startdate:startdate,
                flg:false
            }
        ))
    }
  return (
    <React.Fragment>
        <h1>ToDoの追加</h1>
        <Link to="/">一覧に戻る</Link>
        <div>
            <InputLabel htmlFor="ticket">チケット名</InputLabel>
            <Input id="ticket" type="text" onChange={((e)=>setTicket(e.target.value))}/>
        </div>
        <div>
            <InputLabel htmlFor="text">詳細</InputLabel>
            <Input id="text" type="text" onChange={((e)=>setText(e.target.value))}/>
        </div>
        <div>
            <InputLabel htmlFor="person">担当者</InputLabel>
            <Input id="person" type="text" onChange={((e)=>setPerson(e.target.value))}/>
        </div>
        <div>
            <InputLabel htmlFor="duedate">期日</InputLabel>
            <Input id="duedate" type="date" onChange={((e)=>setDuedate(e.target.value))}/>
        </div>
        <div>
            <InputLabel htmlFor="startdate">開始日</InputLabel>
            <Input id="startdate" type="date" onChange={((e)=>setStartdate(e.target.value))}/>
        </div>
        <AddCircle onClick={addTodo}></AddCircle>
    </React.Fragment>
  );  
}
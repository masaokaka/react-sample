import React,{ useEffect,useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@material-ui/core'
import GetLocalData from './GetLocalData';

export const TodoInfo = () => {
  const {id} = useParams()
  const [todoInfo,setTodoInfo] = useState([]);

  useEffect(() => {
    let data = GetLocalData()
    let index = data.findIndex(el=>el.id===id)
    let item = data.splice(index, 1)
    setTodoInfo(item[0])
  }, [id])
  
  return (
    <TableContainer>
      <h1>ToDo詳細情報</h1>
      <Link to="/">一覧に戻る</Link>
      {todoInfo.flg &&
      <h3>完了済みです！</h3>
      }
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>作業名</TableCell>
            <TableCell>詳細</TableCell>
            <TableCell>担当者</TableCell>
            <TableCell>締切日</TableCell>
            <TableCell>開始日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{todoInfo.id}</TableCell>
            <TableCell>{todoInfo.ticket}</TableCell>
            <TableCell>{todoInfo.text}</TableCell>
            <TableCell>{todoInfo.person}</TableCell>
            <TableCell>{todoInfo.duedate}</TableCell>
            <TableCell>{todoInfo.startdate}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );  
}
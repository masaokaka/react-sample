import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData, doneTodo, deleteTodo } from "../actions";
import { IconButton, Checkbox } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import GetLocalData from "./GetLocalData";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos ? state.todo.todos:[]);

  useEffect(() => {
    let todolist = GetLocalData();
    dispatch(fetchData(todolist));
  },[])

  return (
    <React.Fragment>
      <h2>ToDoリスト</h2>
      <Link to="/addtodo">追加</Link>
      {todos.length !== 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">チケット名</TableCell>
                <TableCell align="center">担当者</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{todo.id}</TableCell>
                  {todo.flg ? (
                    <TableCell align="center">
                      <del>
                        <Link to={`/todoinfo/${todo.id}`}>{todo.ticket}</Link>
                      </del>
                    </TableCell>
                  ) : (
                    <TableCell align="center">
                      <span>
                        <Link to={`/todoinfo/${todo.id}`}>{todo.ticket}</Link>
                      </span>
                    </TableCell>
                  )}
                  <TableCell align="center">{todo.person}</TableCell>
                  <TableCell align="center">
                    <Checkbox
                      color="primary"
                      type="checkbox"
                      onChange={() => {
                        dispatch(doneTodo(index));
                      }}
                      checked={todo.flg}
                    />
                    <IconButton
                      variant="contained"
                      onClick={() => {
                        dispatch(deleteTodo(index));
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  );
};

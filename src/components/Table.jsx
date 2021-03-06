import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import {useSelector, useDispatch } from 'react-redux';
import {selectTodos, removeItem} from '../features/todo/todoSlice';
import { TextField } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHead:{
    backgroundColor: grey[100] ,
  },
  searchField:{
    margin :'15px 0',
  }
});


export default function BasicTable({handleClickOpen}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [userInput, setUserInput] = useState("")
  const handleDelete = (id) => ()=> {
    dispatch(removeItem(id))
  };
  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }
  const filterRow = todos.filter(todo=> {
    return todo.title.toLowerCase().includes(userInput.toLowerCase())||
    todo.id.toLowerCase().includes(userInput.toLowerCase())||
    todo.state.toLowerCase().includes(userInput.toLowerCase())||
    todo.url.toLowerCase().includes(userInput.toLowerCase())
  })

  return (
    <>
    <TextField onChange={handleSearch} value={userInput} id="standard-basic" className={classes.searchField} fullWidth label="Search" /> 
    <TableContainer component={Paper} >
      <Table  className={classes.table} aria-label="simple table">
        <TableHead  classes={{
          root:classes.tableHead 
        }}>
          <TableRow>
            <TableCell width="20%">Id</TableCell>
            <TableCell width="20%" align="left">Title</TableCell>
            <TableCell width="10%" align="left">State</TableCell>
            <TableCell width="20%" align="left">Url</TableCell>
            <TableCell width="10%" align="left">Created at</TableCell>
            <TableCell width="10%" align="left">Updated at</TableCell>
            <TableCell width='7%' align="left"></TableCell>
            <TableCell width="3%" align="left" ><IconButton  onClick={handleClickOpen(null)} aria-label="delete">
                <AddIcon  />
            </IconButton></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterRow.map((row) => (
            <TableRow key={row.id}>
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.state}</TableCell>
              <TableCell align="left">{row.url}</TableCell>
              <TableCell align="left">{row.createdAt}</TableCell>
              <TableCell align="left">{row.updatedAt}</TableCell>
              <TableCell align="left"><IconButton aria-label="edit" onClick={handleClickOpen(row)}>
                <CreateIcon color='error'/>
                </IconButton></TableCell>
              <TableCell align="left"><IconButton aria-label="delete" onClick={handleDelete(row.id)}>
                <DeleteIcon color='error' />
                </IconButton>
                </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

import React, { Component } from "react";
import "./TodoApp.css";
import { TodoList } from "./TodoList";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import { Card } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import moment from "moment";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {Link} from "react-router-dom";


export class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TodoList todoList={this.props.items} />
        <div style={{float: 'right'}}>
        
        <Link to="/NewTask">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        </Link>
        </div>
      </div>
    );
  }

}

export default TodoApp;

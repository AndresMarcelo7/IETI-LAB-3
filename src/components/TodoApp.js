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
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], text: "", responsible: {name:"",email:""},status:"", dueDate: moment() };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">

        <br />
        <br />

        <form onSubmit={this.handleSubmit} className="todo-form">
          <h3>New TODO</h3>
          <Card>
            <CardContent>
              <label htmlFor="text" className="right-margin">
                Text:
              </label>

              <TextField
                id="text"
                onChange={this.handleTextChange}
                value={this.state.text}
              ></TextField>

              <br />
              <br />
              <label htmlFor="status" className="right-margin">
                Status:
              </label>

              <TextField
                id="status"
                type="text"
                onChange={this.handleStatusChange}
                value={this.state.status}
              ></TextField>
              <br />
              <br />

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  value={this.state.dueDate}
                  onChange={this.handleDateChange}
                  format="dd/MM/yyyy"
                />
              </MuiPickersUtilsProvider>

              <br />
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button size="large" color="secondary" type="submit">
                Add #{this.state.items.length + 1}
              </Button>
            </CardActions>
          </Card>
        </form>

        <br />
        <br />

        <TodoList todoList={this.state.items} />
      </div>
    );
  }
  

  handleTextChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleStatusChange(e) {
    this.setState({
      status: e.target.value,
    });
  }

  handleDateChange(date) {
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    console.log(date);
    this.setState({
      dueDate: new Date(date).toLocaleDateString("en-US",options),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      !this.state.text.length ||
      !this.state.status.length ||
      !this.state.dueDate
    )
      return;

    const newItem = {
      text: this.state.text,
      responsible:{name:localStorage.getItem("name"),email:localStorage.getItem("email")},
      status: this.state.status,
      dueDate: new Date(this.state.dueDate),
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: "",
      responsible:{name:"",email:""},
      status: "",
      dueDate: null,
    }));
  }
}

export default TodoApp;

import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {TodoApp} from './components/TodoApp';
import {BrowserRouter as Router, Redirect, Route,Switch,withRouter} from 'react-router-dom'
import {Login} from './components/Login'
import NavigationDrawer from './components/NavigationDrawer'
import NewTask from './components/NewTask'
import { UserProfile } from './components/UserProfile';
// import DrawerLeft from './components/DrawerLeft'

//localStorage.getItem("isLogged")==="true"?<DrawerLeft main={<TodoApp/>}/>:<Login/>

const todos = [];


export class App extends Component {
    constructor(props) {
        super(props);
        localStorage.setItem("password","password")
        localStorage.setItem("email","sancarbar@gmail")
        localStorage.setItem("name","Santiago Carrillo")
    }

    render() {
        if(localStorage.getItem("isLogged")===undefined){
            localStorage.setItem("isLogged",false)
        }
        return (
            <Router>
            <div className="App">
                    <Switch>
                    <Route exact path="/" component={() => localStorage.getItem("isLogged")==="true"?<NavigationDrawer component={<TodoApp items={todos}/>}/>:<Login/>}/>
                    <Route path="/todo" component={() => localStorage.getItem("isLogged")==="true"?<NavigationDrawer component={<TodoApp items={todos}/>}/>:<Login/>}/>
                    <Route path="/NewTask" render={()=>localStorage.getItem("isLogged")==="true"?<NavigationDrawer component={<NewTask submit={this.submitTodo}/>}/>:<Login/>}/>
                    <Route path="/userProfile" component={() => localStorage.getItem("isLogged")==="true"?<NavigationDrawer component={<UserProfile/>}/>:<Login/>}/>
                    </Switch>
                
            </div>
        </Router>
        );
        }
        submitTodo(item){
            todos.push(item);
           
        }

}
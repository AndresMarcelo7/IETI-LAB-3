import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {TodoApp} from './components/TodoApp';
import {BrowserRouter as Router, Link, Route,Switch,withRouter} from 'react-router-dom'
import {Login} from './components/Login'
import NavigationDrawer from './components/NavigationDrawer'
// import DrawerLeft from './components/DrawerLeft'

//localStorage.getItem("isLogged")==="true"?<DrawerLeft main={<TodoApp/>}/>:<Login/>

const LoginView = () => (
    localStorage.getItem("isLogged")==="true"?<NavigationDrawer/>:<Login/>
);

const TodoAppView = () => (
    localStorage.getItem("isLogged")==="true"?<NavigationDrawer/>:<Login/>
);


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
                    <Route exact path="/" component={LoginView}/>
                    <Route path="/todo" component={TodoAppView}/>
                    </Switch>
                
            </div>
        </Router>
        );
        }

}
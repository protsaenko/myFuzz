import './styles/App.css';
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"
import Header from "./components/Header";
import {Form, Input} from "antd";
import CreateAccount from "./components/CreateAccount";
import {Link, Route, BrowserRouter as Router, Switch, Redirect, useHistory} from "react-router-dom";
import ResetPassword from "./components/ResetPassword";
import RecoverPassword from "./components/RecoverPassword";
import LogIn from "./components/LogIn";
import Main from "./components/Main";


function App() {

    return (
        <div className="App">
            <Router> <Link to='/'>create</Link>
                <Link to='login'>login</Link>
                <Link to='recover_password'>recover_password</Link>
                <Link to='reset_password'>reset_password</Link>

                <Switch>
                    <Route exact path='/'><CreateAccount/></Route>
                    <Route path='/login'><LogIn/></Route>
                    <Route path='/recover_password'><RecoverPassword/></Route>
                    <Route path='/reset_password'><ResetPassword/></Route>
                    <Redirect to='login'></Redirect>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

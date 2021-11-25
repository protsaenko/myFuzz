import React from 'react';
import Header from "./Header";
import MyInput from "./UI/input/MyInput";
import MyButtonSubmit from "./UI/button/MyButtonSubmit";
import LogIn from "./LogIn";
import {useHistory} from "react-router-dom";

const CreateAccount = () => {
    const history = useHistory();

/*    const routeChange = () =>{
        let path = `newPath`;
        history.push(path);
    }*/

    function buttonAction(e){
    e.preventDefault();
    console.log("I was clicked");
        console.log(history);
        let path = `login`;
        history.push(path);

    }
    return (
        <div>
            <Header title="Create an account"/>
            <p>This is some testststs</p>
            <form style={{margin: '24px'}} name={"auth"}>
                <MyInput type={"email"} name={"email"} placeholder={"Enter email address"} label={"Email address"}></MyInput>
                <MyInput type={"password"} name={"password"} placeholder={"Enter password"} label={"Password"}>there
                    will be note</MyInput>
               <MyButtonSubmit  type={'submit'}>Register</MyButtonSubmit>
                <MyButtonSubmit type={'redirect'} onClick={buttonAction}>Log in</MyButtonSubmit>
            </form>

        </div>
    );
};

export default CreateAccount;
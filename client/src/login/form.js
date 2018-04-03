import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value.toLowerCase() });
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    submitLoginForm(e) {
        e.preventDefault();
        console.log("submitloginform",this.state);
        this.props.submitLoginForm(this.state);
    }


    render() {
        return (
            <div>
                <form method="post" onSubmit={this.submitLoginForm} >
                    <TextField id="loginEmail" type="text" name="email" label="Email" onChange={this.handleChangeUsername} />
                    <br />
                    <TextField id="loginPassword" type="password" name="password" label="Password" onChange={this.handleChangePassword} />
                    <br />
                    <Button id="signinBtn" raised color="primary" type="submit">Sign In</Button>
                </form>
                <br />
                <p>Not Registered: <Link to={'/signUp'}>Sign Up</Link> </p>
            </div>
        )
    }
};
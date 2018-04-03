import React from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mobileNumber: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleMobileNumberChange(e) {
        this.setState({ mobileNumber: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleConfirmPasswordChange(e) {
        this.setState({ confirmPassword: e.target.value });
    }

    submitRegistration(e) {
        e.preventDefault();
        console.log("SignupDetails", this.state);
        this.props.submitRegistration(this.state);
    }

    render() {
        return (
            <div>

                <form method="post" onSubmit={this.submitRegistration}>
                    <TextField id="signupUserName" type="text" name="name" label="Name" onChange={this.handleNameChange} />
                    <TextField id="signupPhone" type="text" name="phone number" label="Phone Number" onChange={this.handleMobileNumberChange} />
                    <TextField id="signupEmail" type="text" name="email" label="Email" onChange={this.handleEmailChange} />
                    <TextField id="signupPassword" type="password" name="password" label="Password" onChange={this.handlePasswordChange} />
                    <TextField id="signupPswdReconf" type="password" name="confirm password" label="Confirm Password" onChange={this.handleConfirmPasswordChange} />

                    <div className="btnDiv">
                        <Button id="signupBtn" raised color="primary" className="button" type="submit" >Sign Up</Button>
                        <br />
                        <p>Already Registered: <Link to={'/'}>Sign In</Link> </p>
                    </div>
                </form>

            </div>
        )
    }

}

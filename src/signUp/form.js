import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <form method="post" onSubmit={this.submitRegistration}>
                    <TextField id="signupUserName" type="text" name="name" label="First Name" />
                    <TextField id="signupPhone"  type="text" name="phone number" label="Phone Number"  />
                    <TextField id="signupEmail"  type="text" name="email" label="Email"/>
                    <TextField id="signupConfirmEmail"  type="text" name="email" label="Confirm Email"/>
                
                    <TextField id="signupPassword"  type="password" name="password" label="Password"/>

                    <TextField id="signupPswdReconf"  type="password" name="confirm password" label="Confirm Password" />

                    <div className="btnDiv">
                        <Button id="signupBtn" raised color="primary" className="button" type="submit">Sign Up</Button>
                    </div>
                </form>

            </div>
        )
    }

}

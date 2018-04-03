import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './form';
import { loginUserAction } from './action';

class LoginContainer extends Component {
    constructor() {
        super();
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    submitLoginForm(loginRequestData) {
        this.setState({ isLoading: true });
        console.log("loginRequestData ", loginRequestData);
        this.props.loginUserAction(loginRequestData);
    }

    render() {
        return (
            <div>
                <LoginForm submitLoginForm={this.submitLoginForm} />
            </div>
        )
    }
};

/**
 * Map the state to props.
 */
const mapStateToProps = function (state) {
    return {
        isLoading: state.login.isLoading,
        onSuccess: state.login.onSuccess,
        onError: state.login.onError
    }
}


/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => {
    return {
        loginUserAction: (loginRequestData) => dispatch(loginUserAction(loginRequestData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './form';
import { signUpAction } from './actions';

class SignUpFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    componentWillReceiveProps(nextprops) {
        // console.log("componentWillReceiveProps",nextprops);
        if (nextprops.onSuccess && nextprops.onSuccess != null) {
            this.props.history.push('/');
        }
        if (nextprops.onError) {
            this.props.history.push('/signUp');
        }
    }

    submitRegistration(formObject) {
        formObject['userName'] = formObject['email'];
        // console.log(" formObject ", formObject);
        this.props.signUpAction(formObject);
    }

    render() {

        let messages = {
            isLoading: this.props.isLoading,
            onSuccess: this.props.onSuccess,
            onError: this.props.onError
        };

        return (
            <div>
                <SignUpForm submitRegistration={this.submitRegistration} />
            </div>
        )
    }

}

/**
 * Map the state to props.
 */
const mapStateToProps = function (state) {
    return {
        isLoading: state.registrationData.isLoading,
        onSuccess: state.registrationData.onSuccess,
        onError: state.registrationData.onError
    }
}


/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => {
    return {
        signUpAction: (registrationFormData) => dispatch(signUpAction(registrationFormData))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer);
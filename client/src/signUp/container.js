import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './form';
import { signUpAction } from './actions';

class SignUpFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    submitRegistration(formObject) {
        formObject['userName'] = formObject['email'];
        console.log(" formObject ", formObject);
        this.props.signUpAction(formObject);
    }

    render() {
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
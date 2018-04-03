import React from 'react';
import SignUpForm from './form';

export default class SignUpFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SignUpForm />
            </div>
                )
    }

}

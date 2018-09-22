import React from 'react';

export default class DashboardForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h4>User Name : {this.props.loginData.toUpperCase()}</h4>
            </div>
        )
    }
}
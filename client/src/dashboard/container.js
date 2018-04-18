import React from 'react';
import DashboardForm from './form';

class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DashboardForm />
            </div>
        )
    }
}

export default DashboardContainer;
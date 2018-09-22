import React from 'react';
import { connect } from 'react-redux';
import CreateProductForm from './form';

class CreateProductContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CreateProductForm />
            </div>
        )
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = function (state) {
    console.log("createProduct==", state);
    return {
        isLoading: state.createProduct.isLoading,
        onSuccess: state.createProduct.onSuccess,
        onError: state.createProduct.onError
    }
}


/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => {
    return {
        // dashboardUserAction: (dashboardRequestData) => dispatch(dashboardUserAction(dashboardRequestData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductContainer);
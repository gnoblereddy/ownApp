import React from 'react';
import { connect } from 'react-redux';
import CreateProductForm from './form';
import { createProductAction } from './action';

class CreateProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.saveCreateForm = this.saveCreateForm.bind(this);
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.onSuccess && nextprops.onSuccess != null) {
            this.props.history.push('/dashboard');
        }
    }

    saveCreateForm(createProductDetails) {
        console.log('createproductdetails----', createProductDetails);
        this.props.createProductAction(createProductDetails);
    }

    render() {
        return (
            <div>
                <CreateProductForm saveCreateForm={this.saveCreateForm} />
            </div>
        )
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = function (state) {
    // console.log("createProduct==", state);
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
        createProductAction: (createProductFormData) => dispatch(createProductAction(createProductFormData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductContainer);
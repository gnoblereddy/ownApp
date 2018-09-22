import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export default class CreateProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productType: ''
        };
        this.handleProductNameChange = this.handleProductNameChange.bind(this);
        this.handleProductTypeChange = this.handleProductTypeChange.bind(this);
        this.saveCreateForm = this.saveCreateForm.bind(this);
    }

    handleProductNameChange(e) {
        this.setState({ productName: e.target.value });
    }

    handleProductTypeChange(e) {
        this.setState({ productType: e.target.value });
    }

    saveCreateForm(e) {
        e.preventDefault();
        this.props.saveCreateForm(this.state);
    }

    render() {
        return (
            <div>
                <h1>Create Product</h1>
                <form method="post" onSubmit={this.saveCreateForm}>
                    <TextField type="text" name="product name" label="Product Name" onChange={this.handleProductNameChange} />
                    <br />
                    <TextField type="text" name="product type" label="Product Type" onChange={this.handleProductTypeChange} />

                    <div className="btnDiv">
                        <Button raised color="primary" className="button" type="submit" >Save</Button>
                        <br />
                    </div>
                </form>
            </div>
        )
    }
}
import { SET_CREATE_PRODUCT_PENDING, SET_CREATE_PRODUCT_SUCCESS, SET_CREATE_PRODUCT_ERROR } from './constants';

import callCreateProductApi from './services';

function setCreateProductPending(isLoading) {
    return {
        type: SET_CREATE_PRODUCT_PENDING,
        isLoading
    };
}

function setCreateProductSuccess(successData) {
    return {
        type: SET_CREATE_PRODUCT_SUCCESS,
        successData
    };
}

function setCreateProductErrorData(errorData) {
    return {
        type: SET_CREATE_PRODUCT_ERROR,
        errorData
    };
}

export function createProductAction(createProductData) {
    return dispatch => {
        dispatch(setCreateProductPending(true));
        dispatch(setCreateProductSuccess(null));
        dispatch(setCreateProductErrorData(null));

        callCreateProductApi(createProductData, response => {
            if (response.status) {
                dispatch(setCreateProductSuccess(response.result));
                dispatch(setCreateProductErrorData(null));
            } else {

            }
        });
    }
}
import { SET_CREATE_PRODUCT_PENDING, SET_CREATE_PRODUCT_SUCCESS, SET_CREATE_PRODUCT_ERROR } from './constants';

const initalState = {
    isLoading: false,
    onSuccess: null,
    onError: null
};

export default function createProductReducer(state = initalState, action) {
    switch (action.type) {
        case SET_CREATE_PRODUCT_PENDING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });

        case SET_CREATE_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                onSuccess: action.successData
            });

        case SET_CREATE_PRODUCT_ERROR:
            return Object.assign({}, state, {
                onError: action.onError
            });

        default:
            return state;
    }
}
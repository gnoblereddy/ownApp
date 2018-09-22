import utils from '../utils';

export default function callCreateProductApi(createProductData, callback) {
    utils.httpRequest('/createProduct', 'post', createProductData, (response) => {
        callback(response);
    })
}
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var createProductSchema = new Schema({
    productName: String,
    productType: String
})

module.exports = mongoose.model('createProductSchema', createProductSchema)
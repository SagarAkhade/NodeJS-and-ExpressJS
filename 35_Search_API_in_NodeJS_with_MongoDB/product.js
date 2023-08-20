/* This products file we are using the 35_Search_API_in_NodeJS_with_Mongoose file */

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})
module.exports = mongoose.model('products', productSchema);
/* This products file we are using the 34_Post_API_with_Mongoose file */

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})
module.exports = mongoose.model('products', productSchema);
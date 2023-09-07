const mongoose = require('mongoose');

const Products = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    price : {
        type : Number,
        require : true,
    },
    description : {
        type : String ,
        require : true,
    },
    merchant : {
        type : String,
        require : true,
    },
    discountType : {
        type : String,
        require : true,
    },
    category : {
        type : String,
        require : true,
    },
    offerName : {
        type : String,
        require : true,
    }
})

const products = mongoose.model('Products' , Products)

module.exports = products;
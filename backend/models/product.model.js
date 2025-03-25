import mongoose from "mongoose";

//create a schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type:String,
        required:true
    },
}, {
    timestamps:true // stores createdAt and UpdatesAt
});

//depending upon schema, create product model
const Product = mongoose.model('Product', productSchema); //asking mongoose to create a model or collection called product looking at the schema specified
//each Product should have the fields that's provided.

export default Product;
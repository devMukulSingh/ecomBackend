import mongoose from "mongoose";

const productSchema = new mongoose.Schema( {
    id:{
        type:String,
        required:true,
        unique:true,
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    discount:String,
    description:String,
    tagline:String,

})

const productModel = new mongoose.model('productModel', productSchema); 
export default productModel;
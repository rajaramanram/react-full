import mongoose from 'mongoose'; 

const productSchema = mongoose.Schema({
    id:Number,
    product_name:String,
    product_id:Number,
    product_price:Number,
    selling_price:Number,
    warning:Number
})

export default mongoose.model('products',productSchema)
import mongoose from 'mongoose'; 

const userSchema = mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String,
    email:String,
    age:Number
})

export default mongoose.model('usersdb',userSchema)
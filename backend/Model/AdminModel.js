import mongoose from 'mongoose'
import validator from 'validator'


const usermodel = new mongoose.Schema({
    name: {
        type:String,
       
    },
    
    email:{
        type:String,
        validate:[validator.isEmail, 'Enter Correct email ID'],
        unique:true,
        required:true,
    },

    message: {
        type: String,
       
    }

})

export default mongoose.model('PotfolioUser', usermodel)
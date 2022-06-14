import mongoose from 'mongoose'

const ResumeModel = new mongoose.Schema({
    Link: {
        type:String
    }

})

export default mongoose.model('Resume', ResumeModel)
import mongoose from 'mongoose'

const DesktopPort = new mongoose.Schema({
    projecttitle: {
        type:String,
        required:[true, 'Project Title is missing']
    },

    carouselimage:[
        {
            id:{
                type:String,
                required:[true, 'carousel image ID is missing']
            },
            url:{
                type:String,
                required:[true, 'carousel image url is missing']
            }
        }
    ],


    projectlink:{
        type:String,
       
    }



})

export default mongoose.model('DesktopPort', DesktopPort)
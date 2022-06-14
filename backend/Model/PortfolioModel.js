import mongoose from 'mongoose'

const Portfolio = new mongoose.Schema({
    projecttitle: {
        type:String,
        required:[true, 'Project Title is missing']
    },

    projectdes: {
        type:String,
        required:[true, 'Project Description is missing']
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

    aboutdes:{
        type:String,
        required:[true, 'about description is missing']
    },

    technicalshotdes:{
        type:String,
        required:[true, 'technical shot description is missing']
    },

    listoftypeodcode:[
        {
            name:{
                type:String,
                required:[true, 'Type of language is missing']
            }
        }
    ],

    projectlink:{
        type:String,
        required:[true, 'project link is missing']
    }



})

export default mongoose.model('Portfolio', Portfolio)
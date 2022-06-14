import mongoose from 'mongoose'

const Database = () =>{
    mongoose.connect(process.env.MONGODB_URL, 
        {useNewUrlParser: true, useUnifiedTopology:true
        })
        .then((data)=>{
            console.log(`Database Connected: ${data.connection.host}`);
        })

}

export default Database;

import App from "./app.js"
import Database from "./Database/DatabaseConnection.js"

import dotenv from 'dotenv'

dotenv.config({path: "backend/Config/Config.env"})

process.on('uncaughtException', (err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`shutting down server due to uncaught Exception`)
    process.exit(1)
})

Database()
const server = App.listen(process.env.PORT, ()=>{
    console.log(`Server on http://localhost:${process.env.PORT}`)
})

process.on('unhandledRejection', (err)=>{
    console.log(`Error ${err.message}`);
    console.log(`shutting down server due  unhandle promise rejection`)

    server.close(()=>{
        process.exit(1);
    })
})
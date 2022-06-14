import express from "express"
import dotenv from 'dotenv'
import Route from "./Routes/route.js"
import path from 'path';
import {fileURLToPath} from 'url';

dotenv.config({path: "backend/Config/Config.env"})
const App = express()

App.use(express.json()) // this is use to get data in json and send to function
App.use('/api/v2', Route)

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


App.use(express.static(path.join(__dirname, "../frontend/build" )));

App.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../Portfolio/frontend/build/index.html"));
});

export default App
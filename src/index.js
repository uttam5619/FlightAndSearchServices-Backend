import { config } from 'dotenv'
import Runserver from './config/server.config.js'
import connectDB from './config/mongoDB.config.js'
import app from './app.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

config()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

const RunApplication =async ()=>{
    
    await connectDB().then((e)=>{
        Runserver()
    }).catch((err)=>{
        console.log(`${err.message}`)
        process.exit(1)
    })
    
}

RunApplication()
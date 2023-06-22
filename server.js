import express from 'express'
import { PORT } from './config'
import cors from 'cors'
import connectDB from './db/db'
import authRoute from './routes/AuthRoute'
import blogRoute from './routes/BlogRoute'


connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth" ,authRoute)
app.use("/api/blog" ,blogRoute)

app.listen(PORT,() =>{
console.log(`server is running ${PORT}`);
})
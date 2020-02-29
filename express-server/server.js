import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import uuid from 'uuid'
import router from './router'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

mongoose.connection.on('connected', () => {
  console.log('connected!')
})
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-taijg.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.set('trust proxy', 1)
app.use(session({
  genid: (req) => uuid(),
  secret: process.env.SESSION_SECRET,
  resave: true,
  rolling: true,
  saveUninitialized: true,
  cookie: process.env.MODE == 'development' ? { httpOnly: false } : { secure: true }
}))

app.use(express.static(path.join(__dirname, '../public')))

app.use(router)

app.listen(port, err => {
  if (err) throw err
  else console.log('server started in ES6!')
})

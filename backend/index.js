import express from 'express'
import { } from 'dotenv/config'
import connect from './src/database/database.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './src/routes/routes.js'


const PORT = process.env.PORT


const app = express()

app.use(express.json());

app.use(cookieParser());

connect()

const allowOrigins = ['http://localhost:1234']

const corsOptions = {
    origin: allowOrigins,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use("/api", router);

app.get('/', (req, res) => {
    res.send('api working fine :)')
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})
import 'reflect-metadata'
import express from 'express'
import './database'
import { router } from './routes'

const app = express()
const door = 3333

app.use(express.json())
app.use(router)

app.listen(door, () => console.log(`The server is working`))
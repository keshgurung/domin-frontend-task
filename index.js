import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(
  cors({
    origin: '*',
  })
)
const port = process.env.PORT || 4000

const __dirname = path.resolve()

app.use(express.static(`${__dirname}/frontend/build`))

app.use(express.json())

app.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      uid: 'SN0000f43',
      image: 'https://i.imgur.com/EGHGo3i.png',
      type: 'S4 Pro',
      location: 'Site1, Cheddar, UK',
      status: 'Active',
    },
    {
      id: 2,
      uid: 'SN0000g96',
      image: 'https://i.imgur.com/5w7jfqf.png',
      type: 'S6 Pro',
      location: 'Site1, Cheddar, UK',
      status: 'Error',
    },
    {
      id: 3,
      uid: 'SN0000h56',
      image: 'https://i.imgur.com/YgIG0cc.png',
      type: 'Fast',
      location: 'Vehicle1, Cheddar, UK',
      status: 'Active',
    },
  ])
})

app.get('/1', (req, res) => {
  res.json([
    {
      id: 1,
      uid: 'SN0000f43',
      image: 'https://i.imgur.com/EGHGo3i.png',
      type: 'S4 Pro',
      location: 'Site1, Cheddar, UK',
      status: 'Active',
    },
  ])
})

app.get('*', function (request, response) {
  response.sendFile(`${__dirname}/frontend/build/index.html`)
})

app.listen(port, () => {
  console.log(`app running successfully on port ${port}`)
})

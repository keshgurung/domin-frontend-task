import express from 'express'

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      uid: 'SN0000f43',
      image: 'https://imgur.com/yaO9u1Y',
      type: 'S4 Pro',
      location: 'Site1, Cheddar, UK',
      Status: 'Active',
    },
    {
      id: 2,
      uid: 'SN0000g96',
      image: 'https://imgur.com/jlIk0Kk',
      type: 'S6 Pro',
      location: 'Site1, Cheddar, UK',
      Status: 'Error',
    },
    {
      id: 3,
      uid: 'SN0000h56',
      image: 'https://imgur.com/zMtRZjU',
      type: 'Fast',
      location: 'Vehicle1, Cheddar, UK',
      Status: 'Active',
    },
  ])
})
app.get('/1', (req, res) => {
  res.json([
    {
      id: 1,
      uid: 'SN0000f43',
      image: 'https://imgur.com/yaO9u1Y',
      type: 'S4 Pro',
      location: 'Site1, Cheddar, UK',
      Status: 'Active',
    },
  ])
})
app.get('/2', (req, res) => {
  res.json([
    {
      id: 2,
      uid: 'SN0000g96',
      image: 'https://imgur.com/jlIk0Kk',
      type: 'S6 Pro',
      location: 'Site1, Cheddar, UK',
      Status: 'Error',
    },
  ])
})
app.get('/3', (req, res) => {
  res.json([
    {
      id: 3,
      uid: 'SN0000h56',
      image: 'https://imgur.com/zMtRZjU',
      type: 'Fast',
      location: 'Vehicle1, Cheddar, UK',
      Status: 'Active',
    },
  ])
})

app.listen(port, () => {
  console.log(`app running successfully on port ${port}`)
})

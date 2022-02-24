import express from 'express'

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.json([
    {
      id: 'SN0000f43',
      type: 'S4 Pro',
      location: 'Site1, Cheddar, UK',
      Status: 'Active',
    },
    {
      id: 'SN0000g96',
      type: 'S6 Pro',
      location: 'Site1, Cheddar, UK',
      Status: 'Error',
    },
    {
      id: 'SN0000h56',
      type: 'Fast',
      location: 'Vehicle1, Cheddar, UK',
      Status: 'Active',
    },
  ])
})

app.listen(port, () => {
  console.log(`app running successfully on port ${port}`)
})

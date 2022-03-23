require('dotenv').config()

const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const { Game } = require('./models')

app.get('/games', (req, res) => {
  Game.findAll({})
    .then(games => res.json(games))
    .catch(err => console.log(err))
})

app.post('/games', (req, res) => {
  Game.create(req.body)
    .then(game => res.json(game))
    .catch(err => console.log(err))
})

require('./config')
  .sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))

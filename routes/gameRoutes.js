const router = require('express').Router()
const { Game } = require('../models')

router.get('/games', async function (req, res) {
  const games = await Game.findAll({})
  res.json(games)
})

router.post('/games', async function ({ body }, res) {
  const game = await Game.create(body)
  res.json(game)
})

router.delete('/games/:id', async function ({ params: { id } }, res) {
  await Game.destroy({ where: { id } })
  res.sendStatus(200)
})

module.exports = router

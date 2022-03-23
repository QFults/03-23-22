const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Game extends Model { }

Game.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Unknown'
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'NR'
  },
  isMultiplayer: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, { sequelize, modelName: 'game' })

module.exports = Game

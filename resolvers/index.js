const Query = require('./query')
const Produto = require('./produto')
const Usuario = require('./usuario')
const Mutation = require('./mutation')
const { carroMutation, carroQuery } = require('./carro')

module.exports = {
  Query: { ...Query, ...carroQuery },
  Produto,
  Usuario,
  Mutation,
  CarroMutation: carroMutation
}
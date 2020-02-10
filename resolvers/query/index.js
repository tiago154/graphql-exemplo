const aleatorios = require('./aleatorios')
const perfil = require('./perfil')
const produto = require('./produto')
const usuario = require('./usuario')

module.exports = {
  ...aleatorios,
  ...perfil,
  ...produto,
  ...usuario
}
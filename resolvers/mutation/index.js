const usuario = require('./usuario')
const perfil = require('./perfil')
const carro = require('./carro')

module.exports = {
  ...usuario,
  ...perfil,
  ...carro
}
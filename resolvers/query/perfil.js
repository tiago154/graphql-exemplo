const { perfisMock } = require('../../data/db')

module.exports = {
  perfis: () => perfisMock,
  perfil: (_, { id }) => perfisMock.find(p => p.id === id)
}
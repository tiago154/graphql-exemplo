const { perfisMock } = require('../../data/db')

module.exports = {
  salario: ({ salarioReal }) => salarioReal,
  blabla: ({ nome, email }) => `${nome}::${email}`,
  perfil: ({ perfilId }) => perfisMock.find(p => p.id === perfilId)
}
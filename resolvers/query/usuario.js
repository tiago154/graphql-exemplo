const { usuariosMock } = require('../../data/db')
module.exports = {
  usuarioLogado: () => ({
    id: 1,
    nome: 'Nome do usuário',
    email: 'teste@teste.com',
    idade: 25,
    salarioReal: 1234.56,
    vip: true
  }),
  usuarios: () => usuariosMock,
  usuario: (_, { id }) => usuariosMock.find(u => u.id === id)
}
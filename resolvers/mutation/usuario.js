const { usuariosMock, proximoId } = require('../../data/db')
const { indice, filtros, campos } = require('../../helpers')

module.exports = {
  novoUsuario: (_, { dados }) => {
    if (usuariosMock.some(campos.ehDuplicado(dados.email, 'email')))
      throw new Error('Email já está cadastrado')

    const usuario = {
      id: proximoId('usuario'),
      ...dados,
      perfilId: 1,
      status: 'ATIVO'
    }

    usuariosMock.push(usuario)
    return usuario
  },
  excluirUsuario: (_, { filtro }) => {

    if (!filtro) throw new Error('Não foi informado um filtro')

    const { campo, valor } = filtros.validar(filtro)

    const index = indice.porCampo(usuariosMock, campo, valor)
    if (index < 0) return null

    const excluido = usuariosMock.splice(index, 1)[0]

    return excluido
  },
  alterarUsuario: (_, { alteracao: { filtro, dados } }) => {
    if (!filtro) throw new Error('Não foi informado um filtro')

    const { campo, valor } = filtros.validar(filtro)

    const index = indice.porCampo(usuariosMock, campo, valor)
    if (index < 0) return null

    const usuario = {
      ...usuariosMock[index],
      ...dados
    }

    usuariosMock.splice(index, 1, usuario)

    return usuario
  }
}
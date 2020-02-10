const { perfisMock, proximoId } = require('../../data/db')
const { indice, filtros, campos } = require('../../helpers')

module.exports = {
  novoPerfil: (_, { nome }) => {
    if (perfisMock.some(campos.ehDuplicado(nome, 'nome')))
      throw new Error('Perfil já está cadastrado')

    const perfil = {
      id: proximoId('perfil'),
      nome
    }

    perfisMock.push(perfil)

    return perfil
  },
  excluirPerfil: (_, { filtro }) => {

    if (!filtro) throw new Error('Não foi informado um filtro')

    const { campo, valor } = filtros.validar(filtro)

    const index = indice.porCampo(perfisMock, campo, valor)
    if (index < 0) return null

    const excluido = perfisMock.splice(index, 1)[0]

    return excluido
  },
  alterarPerfil: (_, { alteracao: { filtro, nome } }) => {
    if (!filtro) throw new Error('Não foi informado um filtro')

    const { campo, valor } = filtros.validar(filtro)

    const index = indice.porCampo(perfisMock, campo, valor)
    if (index < 0) return null

    const perfil = {
      ...perfisMock[index],
      nome
    }

    perfisMock.splice(index, 1, perfil)

    return perfil
  }
}
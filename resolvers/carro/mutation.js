const { carrosMock, proximoId } = require('../../data/db')

module.exports = {
  novoCarro: (_, { data: { ano, modelo } }) => {
    const carroRequest = { id: proximoId('carro'), ano, modelo }
    carrosMock.push(carroRequest)
    return carroRequest
  },
  deletarCarro: (_, { id }) => {
    const index = carrosMock.find(c => c.id === id)
    if (!index) return { id: 0, ano: 0, modelo: '' }
    const excluido = carrosMock.splice(index, 1)[0]
    return excluido
  }
}
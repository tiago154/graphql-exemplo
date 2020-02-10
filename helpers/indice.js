const porCampo = (lista, campo, valor) => lista.findIndex(l => l[campo] === valor)

module.exports = { porCampo }
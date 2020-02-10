module.exports = {
  ola: () => 'tunga',
  horaAtual: () => `${new Date}`,
  numerosMegaSena: () => {
    const crescente = (a, b) => a - b
    const novoNumero = n => parseInt(Math.random() * n + 1)
    const ehDuplicado = (array, numero) => array.includes(numero)
    const preencheLista = array => {
      const numero = novoNumero(60)
      if (ehDuplicado(array, numero)) return preencheLista(array)
      return [...array, numero]
    }

    return Array(6).fill(0)
      .reduce(preencheLista, [])
      .sort(crescente)
  }
}
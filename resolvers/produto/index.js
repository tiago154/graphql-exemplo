module.exports = {
  precoComDesconto: ({ desconto, preco }) => {
    if (desconto) {
      return (preco * (1 - desconto)).toFixed(2)
    }
    return preco
  }
}
const validar = filtro => {
  const { id, email, nome } = filtro

  if (id) return { campo: 'id', valor: id }
  if (email) return { campo: 'email', valor: email }
  if (nome) return { campo: 'nome', valor: nome }

  return { campo: '', valor: '' }
}

module.exports = { validar }
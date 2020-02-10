let idUsuario = 0
let idPerfil = 0

const proximoId = (schema) => {
  if (schema === 'usuario') return ++idUsuario
  if (schema === 'perfil') return ++idPerfil
}


const perfisMock = [
  { id: proximoId('perfil'), nome: 'Comum' },
  { id: proximoId('perfil'), nome: 'Administrador' }
]

const usuariosMock = [
  {
    id: proximoId('usuario'),
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfilId: 1,
    status: 'ATIVO'
  },
  {
    id: proximoId('usuario'),
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfilId: 2,
    status: 'INATIVO'
  },
  {
    id: proximoId('usuario'),
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfilId: 1,
    status: 'BLOQUEADO'
  }
]

module.exports = { usuariosMock, perfisMock, proximoId }
let idUsuario = 0
let idPerfil = 0
let idCarro = 0


const proximoId = (schema) => {
  if (schema === 'usuario') return ++idUsuario
  if (schema === 'perfil') return ++idPerfil
  if (schema === 'carro') return ++idCarro
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

const carrosMock = [
  {
    id: proximoId('carro'),
    modelo: 'Mercedes-Benz',
    ano: 1985
  },
  {
    id: proximoId('carro'),
    modelo: 'Chevrolet',
    ano: 1994
  },
  {
    id: proximoId('carro'),
    modelo: 'Nissan',
    ano: 1996
  },
  {
    id: proximoId('carro'),
    modelo: 'Ford',
    ano: 1995
  },
  {
    id: proximoId('carro'),
    modelo: 'Volkswagen',
    ano: 2010
  },
  {
    id: proximoId('carro'),
    modelo: 'Audi',
    ano: 2008
  }
]

module.exports = { carrosMock, perfisMock, proximoId, usuariosMock }
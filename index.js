const { ApolloServer } = require('apollo-server')
const { loadFiles } = require('graphql-import-files')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs: loadFiles('**/schemas/**/*.graphql'),
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})
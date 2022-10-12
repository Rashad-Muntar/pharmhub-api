const express  =  require('express')
const {ApolloServer} = require('apollo-server-express')

const typeDefs = require('./schemers/index')
const resolvers = require('./resolvers/index')

const app  = express()

app.get('/', (req, res) => res.send("Hello World"))

const server = new ApolloServer({
    typeDefs,
    resolvers
});

(async () => {
    await server.start();
    server.applyMiddleware({ app, path: "/api" });
  })();

const PORT  =  process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`listening to por ${PORT}${server.graphqlPath}`)
})
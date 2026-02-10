import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schemaList from "./routes/schemaRoutes.js";
import resolverList from "./routes/resolverRoutes.js";

const server = new ApolloServer({
    typeDefs: schemaList,
    resolvers: resolverList
})


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log("server startedat port 4000")
console.log({ url })
import { ApolloServer } from "@apollo/server";  
import { startStandaloneServer } from "@apollo/server/standalone";  
import mongoose from 'mongoose'

await mongoose.connect("mongodb://localhost:27017/movies_db", {
  userNewUrlParser:true,
  userUnifiendTopoLogy: true
})

console.log("MongoDB connected")

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";
 
const server = new ApolloServer({
  typeDefs,
  resolvers,
})
 
const { url } = await startStandaloneServer(server)
console.log(`🚀 Server ready at ${url}`)

// run node index.js
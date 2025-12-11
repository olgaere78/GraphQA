import { ApolloServer } from "@apollo/server";  
import { startStandaloneServer } from "@apollo/server/standalone";  
import mongoose from 'mongoose'
import { typeDefs } from "./schema_.js";
import {resolvers} from "./_resolver.js";

await mongoose.connect("mongodb://localhost:27017/movies_db")
  
console.log("MongoDB connected")
console.log("TYPEDEFS:", typeDefs);

const server = new ApolloServer({
  typeDefs,
  resolvers,
})
 
const { url } = await startStandaloneServer(server)
console.log(`Server ready at ${url}`)

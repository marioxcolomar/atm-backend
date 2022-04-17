import { ApolloServer, gql } from 'apollo-server';
import mongoose from "mongoose";
import { typeDefs, resolvers } from "types/atm";

mongoose.connect("mongodb://localhost:27017/atm", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.error("database connection error");
});
db.once("open", () => {
  console.log("connected to database");
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
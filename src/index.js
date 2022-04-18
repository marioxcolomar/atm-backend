import { ApolloServer, } from 'apollo-server';
import mongoose from "mongoose";
import { typeDefs, resolvers } from "./types/atm";

try {
  mongoose.connect("mongodb://localhost:27017/atm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", () => {
    console.error("database connection error");
  });
  db.once("open", () => {
    console.log("connected to database");
  });

  const server = new ApolloServer({ typeDefs, resolvers });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
} catch (error) {
  console.log('Error:', error)
}

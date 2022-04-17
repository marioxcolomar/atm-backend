const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type UserAccount {
    balance: number
  }

  type Query {
    getUserAccount: UserAccount
  }
`;

const resolvers = {
  Query: {
    balance: async (_, { id }) => {

    },
  },
  Mutation: {
    saveBalance: async (_, { id, amount }) => {
      const record = await saveFn(id, amount)
      return record
    }
  }
};

const AtmType = {
  typeDefs,
  resolvers
}

export default AtmType
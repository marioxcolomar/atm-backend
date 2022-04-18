const { gql } = require('apollo-server');

export const typeDefs = gql`
  type UserAccount {
    balance: Int
  }

  type Query {
    getUserAccount: UserAccount
  }

  type Mutation {
    saveBalance(id:ID, amount: Int): UserAccount
  }
`;

export const resolvers = {
  Query: {
    getUserAccount: async (_, { id }) => {
      return 0
    },
  },
  Mutation: {
    saveBalance: async (_, { id, amount }) => {
      const record = await saveFn(id, amount)
      return record
    }
  }
};

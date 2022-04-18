import { gql } from 'apollo-server';
import Atm from '../schemas/atm'

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
      const result = await Atm.find({ id })
      return result
    },
  },
  Mutation: {
    saveBalance: async (_, { id, amount }) => {
      const record = await Atm.updateOne({ id, amount })
      return record
    }
  }
};

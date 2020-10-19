import {gql} from "@apollo/client";

export const typeDefs = gql`
  type User {
    id: String!
    name: String!
    surname: String!
    age: Int!
    email: String!
  }

  type Query {
    allUsers(offset: Int, limit: Int): [User]
  }
`

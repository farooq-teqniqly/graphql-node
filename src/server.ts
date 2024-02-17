import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import type { ListenOptions } from "net";

const typeDefs = `
    type Query {
        welcome: String!
        randomNumber: Int!
        daysOfWeek: [String!]!
        isActive: Boolean!
        price: Float!
    }
`;

const resolvers = {
  Query: {
    welcome: () => "Welcome to Apollo Server!",
    randomNumber: () => Math.floor(Math.random() * 10) + 1,
    daysOfWeek: () => [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    isActive: () => false,
    price: () => 19.99,
  },
};
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    welcome: String!
    bye: String!
    randomNumber: Int!
    salary: Float!
    isActive: Boolean!
    months: [String]!
  }
`;

const resolvers = {
  Query: {
    welcome: () => {
      return "Welcome to World of GraphQL";
    },
    bye: () => {
      return "Goodbye.";
    },
    randomNumber: () => {
      return Math.floor(Math.random() * 10) + 1;
    },
    salary: () => {
      return 100000.99;
    },
    isActive: () => {
      return true;
    },
    months: () => {
      return ["January", "February", "March"];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }: { url: string }) =>
    console.log(`Server is running at ${url}`)
  );

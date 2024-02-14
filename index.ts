const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    welcome: String
    bye: String
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
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }: { url: string }) =>
    console.log(`Server is running at ${url}`)
  );

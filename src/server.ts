import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import type { ListenOptions } from "net";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";
import { allCourses, allGenres, allReviews } from "./data/courses";

const createApolloServer = async (
  listenOptions: ListenOptions = { port: 4000 }
) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: listenOptions,
    context: async () => ({ allCourses, allGenres, allReviews }),
  });

  return { server, url };
};

export { createApolloServer, resolvers, typeDefs };

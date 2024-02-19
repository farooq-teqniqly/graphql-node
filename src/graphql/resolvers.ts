import { allCourses, allGenres } from "../data/courses";

const resolvers = {
  Query: {
    courses: () => allCourses,
    course: (_: any, args: { id: any }, __: any) => {
      const id = args.id;
      return allCourses.find((course) => course.id === id);
    },
    genres: () => allGenres,
    genre: (_: any, args: { id: any }, __: any) => {
      const id = args.id;
      return allGenres.find((genre) => genre.id === id);
    },
  },
  Genre: {
    courses: (parent: { id: string }, _: any, __: any) => {
      const genreId = parent.id;
      return allCourses.filter((course) => course.genreId === genreId);
    },
  },
};

export default resolvers;

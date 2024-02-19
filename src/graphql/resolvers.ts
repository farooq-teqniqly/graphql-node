import { allCourses, allGenres } from "../data/courses";

const resolvers = {
  Query: {
    courses: () => allCourses,
    course: (_: any, args: { id: any }, __: any) => {
      const id = args.id;
      return allCourses.find((course) => course.id === id);
    },
    genres: () => allGenres,
  },
};

export default resolvers;

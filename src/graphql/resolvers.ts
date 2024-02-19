import allCourses from "../data/courses";

const resolvers = {
  Query: {
    courses: () => {
      return allCourses;
    },
  },
};

export default resolvers;

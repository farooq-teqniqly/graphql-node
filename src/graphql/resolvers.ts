import allCourses from "../data/courses";

const resolvers = {
  Query: {
    courses: () => {
      return allCourses;
    },
    course: (_: any, args: { id: any }, __: any) => {
      const id = args.id;
      return allCourses.find((course) => course.id === id);
    },
  },
};

export default resolvers;

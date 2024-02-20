import { Course, Genre } from "../entities";

const resolvers = {
  Query: {
    courses: (_: any, args: any, context: any) => {
      let filteredCourses = context.allCourses;
      const { filter } = args;

      if (filter) {
        filteredCourses = filteredCourses.filter(
          (course: Course) => course.isDiscounted === filter.isDiscounted
        );
      }

      return filteredCourses;
    },
    course: (_: any, args: { id: any }, context: any) => {
      const id = args.id;
      return context.allCourses.find((course: Course) => course.id === id);
    },
    genres: (_: any, __: any, context: any) => context.allGenres,
    genre: (_: any, args: { id: any }, context: any) => {
      const id = args.id;
      return context.allGenres.find((genre: Genre) => genre.id === id);
    },
  },
  Genre: {
    courses: (parent: { id: string }, _: any, context: any) => {
      const genreId = parent.id;
      return context.allCourses.filter(
        (course: Course) => course.genreId === genreId
      );
    },
  },
  Course: {
    genre: (parent: { genreId: string }, _: any, context: any) => {
      const genreId = parent.genreId;
      return context.allGenres.find((genre: Genre) => genre.id === genreId);
    },
    reviews: (parent: { id: string }, _: any, context: any) => {
      const courseId = parent.id;
      return context.allReviews.filter(
        (review: { courseId: string }) => review.courseId === courseId
      );
    },
  },
};

export default resolvers;

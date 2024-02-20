import { Course, Genre } from "../entities";

const filterCoursesByDiscount = (courses: Course[], isDiscounted: boolean) => {
  return courses.filter((course) => course.isDiscounted === isDiscounted);
};

const resolvers = {
  Query: {
    courses: (_: any, args: any, context: any) => {
      let filteredCourses = context.allCourses;
      const { filter } = args;

      if (!filter) {
        return filteredCourses;
      }

      return filterCoursesByDiscount(filteredCourses, filter.isDiscounted);
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
    courses: (parent: { id: string }, args: any, context: any) => {
      const genreId = parent.id;
      const { filter } = args;

      const coursesForGenre = context.allCourses.filter(
        (course: Course) => course.genreId === genreId
      );

      if (!filter) {
        return coursesForGenre;
      }

      return filterCoursesByDiscount(coursesForGenre, filter.isDiscounted);
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

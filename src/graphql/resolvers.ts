import { allCourses, allReviews } from "../data/courses";
import { Course, Genre } from "../entities";

const filterCoursesByDiscount = (courses: Course[], isDiscounted: boolean) => {
  return courses.filter((course) => course.isDiscounted === isDiscounted);
};

const getCoursesByAverageRating = (minRatingInclusive: number): Course[] => {
  const courses: Course[] = [];

  allCourses.forEach((course: Course) => {
    const reviews = allReviews.filter(
      (review) => review.courseId === course.id
    );
    const averageRating =
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

    if (averageRating >= minRatingInclusive) {
      courses.push(course);
    }
  });

  return courses;
};

const resolvers = {
  Query: {
    courses: (_: any, args: any, context: any) => {
      let filteredCourses = context.allCourses;
      const { filter } = args;

      if (!filter) {
        return filteredCourses;
      }

      if (filter.isDiscounted !== undefined) {
        filteredCourses = filterCoursesByDiscount(
          filteredCourses,
          filter.isDiscounted
        );
      }

      let coursesWithMinRating: Course[] = [];

      if (filter.rating !== undefined) {
        coursesWithMinRating = getCoursesByAverageRating(
          Math.floor(filter.rating)
        );

        filteredCourses = filteredCourses.filter((course: Course) => {
          return coursesWithMinRating.some((c) => c.id === course.id);
        });
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

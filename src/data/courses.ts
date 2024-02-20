import { Course, Genre, Review } from "../entities";

const allGenres: Genre[] = [
  {
    id: "1",
    name: "Technology",
  },
  {
    id: "2",
    name: "Science",
  },
  {
    id: "3",
    name: "Art",
  },
];

const allCourses: Course[] = [
  {
    id: "1",
    name: "Introduction to TypeScript",
    description: "Learn the basics of TypeScript",
    price: 99.99,
    isDiscounted: false,
    genreId: "1",
  },
  {
    id: "2",
    name: "Introduction to React",
    description: "Learn the basics of React",
    price: 49.99,
    isDiscounted: true,
    genreId: "1",
  },
  {
    id: "3",
    name: "Introduction to GraphQL",
    description: "Learn the basics of GraphQL",
    price: 109.99,
    isDiscounted: false,
    genreId: "1",
  },
];

const allReviews: Review[] = [
  {
    id: "1",
    courseId: "1",
    rating: 5,
    title: "Great course",
    comment: "I really enjoyed this course",
  },
  {
    id: "3",
    courseId: "2",
    rating: 4,
    title: "Great course",
    comment: "I really enjoyed this course",
  },
  {
    id: "4",
    courseId: "2",
    rating: 2,
    title: "Not worth the money",
    comment: "I didn't learn much in this course",
  },
  {
    id: "5",
    courseId: "3",
    rating: 5,
    title: "Great course",
    comment: "I really enjoyed this course",
  },
  {
    id: "6",
    courseId: "3",
    rating: 4,
    title: "Good course",
    comment: "I learned a lot in this course",
  },
];

export { allCourses, allGenres, allReviews };

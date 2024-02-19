import { Course, Genre } from "../entities";

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

export { allCourses, allGenres };

import { Course } from "../entities";

const allCourses: Course[] = [
  {
    id: "1",
    name: "Introduction to TypeScript",
    description: "Learn the basics of TypeScript",
    price: 99.99,
    isDiscounted: false,
  },
  {
    id: "2",
    name: "Introduction to React",
    description: "Learn the basics of React",
    price: 49.99,
    isDiscounted: true,
  },
  {
    id: "3",
    name: "Introduction to GraphQL",
    description: "Learn the basics of GraphQL",
    price: 109.99,
    isDiscounted: false,
  },
];

export default allCourses;

import { ApolloServer } from "@apollo/server";
import { createApolloServer } from "./server";
import request from "supertest";
import allCourses from "./data/courses";

type Query = {
  query: string;
};

describe("courses api", () => {
  let server: ApolloServer;
  let url: string;

  const executeQuery = async (query: Query) => {
    const response = await request(url).post("/").send(query);
    expect(response.error).toBe(false);
    return response.body.data;
  };

  beforeAll(async () => {
    ({ server, url } = await createApolloServer({ port: 0 }));
  });

  afterAll(async () => {
    await server?.stop();
  });

  it("can query all courses", async () => {
    const query = {
      query: `query Query {
        courses {
          id
          name
          description
          price
        }
      }`,
    };

    const data = await executeQuery(query);
    const courses = data.courses;
    expect(courses.length).toBe(3);

    courses.forEach((course: any, index: number) => {
      const expectedCourse = allCourses[index];
      expect(course.id).toBe(expectedCourse.id);
      expect(course.name).toBe(expectedCourse.name);
      expect(course.description).toBe(expectedCourse.description);
      expect(course.price).toBe(expectedCourse.price);
    });
  });

  it("can query a single course", async () => {
    const query = {
      query: `query Query {
        course(id: "3") {
          id
          name
          description
          price
        }
      }`,
    };

    const data = await executeQuery(query);
    const course = data.course;
    const expectedCourse = allCourses[2];

    expect(course.id).toBe(expectedCourse.id);
    expect(course.name).toBe(expectedCourse.name);
    expect(course.description).toBe(expectedCourse.description);
    expect(course.price).toBe(expectedCourse.price);
  });
});

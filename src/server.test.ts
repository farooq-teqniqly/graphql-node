import { ApolloServer } from "@apollo/server";
import { createApolloServer } from "./server";
import request from "supertest";
import allCourses from "./data/courses";

const queryData = {
  query: `query Query {
    courses {
      id
      name
      description
      price
    }
  }`,
};

describe("courses api", () => {
  let server: ApolloServer;
  let url: string;

  const executeQuery = async () => {
    const response = await request(url).post("/").send(queryData);
    expect(response.error).toBe(false);
    return response.body.data;
  };

  beforeAll(async () => {
    ({ server, url } = await createApolloServer({ port: 0 }));
  });

  afterAll(async () => {
    await server?.stop();
  });

  it("returns all courses", async () => {
    const data = await executeQuery();
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
});

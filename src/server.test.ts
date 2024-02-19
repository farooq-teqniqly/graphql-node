import { ApolloServer } from "@apollo/server";
import { createApolloServer } from "./server";
import request from "supertest";
import { allCourses, allGenres } from "./data/courses";

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

  it("can query by genre", async () => {
    const query = {
      query: `query Query {
        genres{
          id
          name
        }
      }`,
    };

    const data = await executeQuery(query);
    const genres = data.genres;
    expect(genres.length).toBe(3);

    genres.forEach((genre: any, index: number) => {
      const expectedGenre = allGenres[index];
      expect(genre.id).toBe(expectedGenre.id);
      expect(genre.name).toBe(expectedGenre.name);
    });
  });

  it("can query a single genre", async () => {
    const query = {
      query: `query Query {
        genre(id: "3") {
          id
          name
        }
      }`,
    };

    const data = await executeQuery(query);
    const genre = data.genre;
    const expectedGenre = allGenres[2];

    expect(genre.id).toBe(expectedGenre.id);
    expect(genre.name).toBe(expectedGenre.name);
  });

  it("can get courses by genre", async () => {
    const query = {
      query: `query Query {
        genre(id: "1") {
          id
          name
          courses {
            id
            name
            description
            price
            isDiscounted
          }
        }
      }`,
    };

    const data = await executeQuery(query);
    const genre = data.genre;
    const expectedGenre = allGenres[0];

    expect(genre.id).toBe(expectedGenre.id);
    expect(genre.name).toBe(expectedGenre.name);

    const courses = genre.courses;
    expect(courses.length).toBe(3);

    courses.forEach((course: any, index: number) => {
      const expectedCourse = allCourses[index];
      expect(course.id).toBe(expectedCourse.id);
      expect(course.name).toBe(expectedCourse.name);
      expect(course.description).toBe(expectedCourse.description);
      expect(course.price).toBe(expectedCourse.price);
      expect(course.isDiscounted).toBe(expectedCourse.isDiscounted);
    });
  });
});

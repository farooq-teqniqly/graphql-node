import { ApolloServer } from "@apollo/server";
import { createApolloServer } from "./server";
import request from "supertest";

const queryData = {
  query: `query Query {
    welcome
    randomNumber
    daysOfWeek
  }`,
};

describe("e2e test", () => {
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

  it("says welcome", async () => {
    const data = await executeQuery();
    expect(data.welcome).toBe("Welcome to Apollo Server!");
  });

  it("generates a random number between 1 and 10", async () => {
    const data = await executeQuery();
    expect(data.randomNumber).toBeGreaterThanOrEqual(1);
    expect(data.randomNumber).toBeLessThanOrEqual(10);
  });

  it("returns day of the week", async () => {
    const data = await executeQuery();
    expect(data.daysOfWeek).toEqual([
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ]);
  });
});

const typeDefs = `
    type Query {
        courses: [Course!]!
        course(id: String!): Course
        genres: [Genre!]!
    }

    type Course {
        id: String!
        name: String!
        description: String!
        price: Float!
        isDiscounted: Boolean!
    }

    type Genre {
        id: String!
        name: String!
    }
`;

export default typeDefs;

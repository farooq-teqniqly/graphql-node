const typeDefs = `
    type Query {
        courses: [Course!]!
        course(id: ID!): Course
        genres: [Genre!]!
        genre(id: String!): Genre
    }

    type Course {
        id: ID!
        name: String!
        description: String!
        price: Float!
        isDiscounted: Boolean!
    }

    type Genre {
        id: ID!
        name: String!
        courses: [Course!]!
    }
`;

export default typeDefs;

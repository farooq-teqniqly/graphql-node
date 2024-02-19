const typeDefs = `
    type Query {
        courses: [Course!]!
        course(id: String!): Course
        genres: [Genre!]!
        genre(id: String!): Genre
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
        courses: [Course!]!
    }
`;

export default typeDefs;

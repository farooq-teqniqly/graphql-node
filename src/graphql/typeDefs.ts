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
        genre: Genre!
        reviews: [Review!]!
    }

    type Genre {
        id: ID!
        name: String!
        courses: [Course!]!
    }

    type Review{
        id: ID!
        rating: Int!
        title: String!
        comment: String!
    }
`;

export default typeDefs;

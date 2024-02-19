const typeDefs = `
    type Query {
        courses: [Course!]!
    }

    type Course {
        id: String!
        name: String!
        description: String!
        price: Float!
        isDiscounted: Boolean!
    }
`;

export default typeDefs;

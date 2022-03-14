// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Book {
    _id:ID
    authors: String
    description: String
    image: String
    link: String
    title: String
}
    type Query {
        books(authors: String): [Book]
    }
`;

// export the typeDefs
module.exports = typeDefs;
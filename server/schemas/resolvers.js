const { User, Book } = require('../models');
const books = require('./typeDefs');

const resolvers = {
    Query: {
        books: async (parent, {authors}) => {
            const params = authors ? { authors } : {};
            return Book.findOne(params);
        },
    }
}

module.exports = resolvers;
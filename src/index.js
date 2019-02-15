const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')
const Subscription = require('./resolvers/Subscription')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Vote = require('./resolvers/Vote')
const Assigments = require('./resolvers/Assignement')
const Meeting = require('./resolvers/Meeting')
const Assignee = require('./resolvers/Assignee')


const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
    Assigments,
    Meeting,
    Assignee
  }

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
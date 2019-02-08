const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')

const resolvers = {
    Query: {
        info: () => `This is the API of hackernews Clone change something else changed`,
        feed: (root, args, context, info) => {
            return context.prisma.links();
        },
        // link: (parent, args) => links.find((x) => {return x.id == args.id;})
        // 
    },
    Mutation: {
        post: (parent, args, context) => {
            return context.prisma.createLink({
                description: args.description,
                url: args.url
            });
        },
        // update : (parent, args) => {
        //     let link = links.find((x) => {return x.id == args.id;});

        //     if(link){
        //         link.description = args.description,
        //         link.url = args.url

        //         return link;
        //     }

        //     return null;
        // },
        // delete: (parent, args) => {
        //     let linkIndex = links.findIndex((x) => {return x.id == args.id;});
        //     return links.splice(linkIndex, 1)[0];
        // },
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
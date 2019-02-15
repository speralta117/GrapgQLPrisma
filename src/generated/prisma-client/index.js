"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Assigments",
    embedded: false
  },
  {
    name: "Assignee",
    embedded: false
  },
  {
    name: "Link",
    embedded: false
  },
  {
    name: "Meeting",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/speralta117/GraphQLPrisma/dev`
});
exports.prisma = new exports.Prisma();

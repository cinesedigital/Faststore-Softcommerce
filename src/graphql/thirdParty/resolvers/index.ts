import gutendexResolvers from "./gutendex";

const resolvers = {
  Query: {
    ...gutendexResolvers,
  },
  Mutation: {},
};

export default resolvers;

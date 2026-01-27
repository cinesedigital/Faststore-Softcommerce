import checkoutResolvers from "./checkout";

const resolvers = {
  Query: {
    ...checkoutResolvers,
  },
  Mutation: {},
};

export default resolvers;

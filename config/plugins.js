module.exports = {
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      introspection: true,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
  },
  placeholder: {
    enabled: true,
    config: {
      size: 18,
      lightness: 20,
    },
  },
};

import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/meals',
  credentials: 'include',
});

// eslint-disable-next-line
export { apolloClient };

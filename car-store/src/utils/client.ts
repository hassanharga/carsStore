import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // uri: `${process.env.REACT_APP_API_URL}/graphql`,
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

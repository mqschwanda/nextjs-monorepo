import { ApolloClient, HttpLink, InMemoryCache } from '@mqs/graphql-client';
import fetch from 'cross-fetch';

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: '/api/graphql', fetch }),
});

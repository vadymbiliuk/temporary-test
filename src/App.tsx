import React from 'react';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';
import {typeDefs, resolvers} from './graphql';
import {Table} from './components/Table';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  typeDefs,
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  resolvers
});

function App() {
  return (
    <ApolloProvider client={client}><Table /></ApolloProvider>
  );
}

export {App};

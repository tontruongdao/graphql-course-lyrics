import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from "react-apollo";

import SongList from './components/SongList'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/'
})

const client= new ApolloClient({
  cache,
  link
});

const Root = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <div>Lyrical</div>
      <SongList/>
    </div>
  </ApolloProvider>
);

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
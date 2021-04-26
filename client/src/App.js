import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      
      <Router >
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/">
            <ul>
              <li>
                <Link to="/songcreate">song create</Link>
              </li>
            </ul>
            <SongList/>
          </Route>
          <Route path="/songcreate">            
            <SongCreate/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

export default App;

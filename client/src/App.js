import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import SongList from './components/SongList'
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router >
        <Switch>
          <Route exact path="/">
            <Link to="/dashboard">dashboard</Link>
            <SongList/>
          </Route>
          <Route path="/dashboard">            
            <Link to="/">Home</Link>
            <div>Dashboard</div>
          </Route>
        </Switch>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <SongList/>
          </header>
        </div> */}
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

import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import SongList from './components/Songlist'
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SongList/>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;

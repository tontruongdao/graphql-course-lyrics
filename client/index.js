import React from 'react';
import ReactDOM from 'react-dom';
import AppoloClient from 'appolo-client'
import { AppoloProvider } from 'react-appolo'

const client = new AppoloClient({})

const Root = () => {
  return (
    <AppoloProvider client={client}>
      <div>Lyrical</div>
    </AppoloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

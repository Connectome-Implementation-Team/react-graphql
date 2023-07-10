import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://opendatanavigator-test.switch.ch/api/graphql',
    cache: new InMemoryCache(),
});

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);

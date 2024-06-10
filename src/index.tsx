import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, createHttpLink, gql, InMemoryCache} from "@apollo/client";
import {PaginatedScholarlyArticle} from "./__generated__/graphql";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'https://opendatanavigator-test.switch.ch/api/graphql',
});

// https://www.apollographql.com/docs/react/networking/authentication/
const authLink = setContext((_, { headers }) => {

    const token = '';
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    //uri: 'https://opendatanavigator-test.switch.ch/api/graphql',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    searchScholarlyArticle: {
                        // Don't cache separate results based on
                        // any of this field's arguments.
                        keyArgs: ['$query'],

                        // Concatenate the incoming list items with
                        // the existing list items.
                        merge(existing = undefined, incoming) {
                            if (existing !== undefined) {
                                const articles = {
                                    edges: existing?.edges?.concat(incoming?.edges),
                                    nodes: existing?.nodes?.concat(incoming?.nodes),
                                    totalCount: incoming?.totalCount,
                                    hasNextPage: incoming?.hasNextPage
                                } as PaginatedScholarlyArticle;

                                return articles;

                            } else {
                                return incoming;
                            }
                        },
                    }
                }
            }
        }
    })
});

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from "@apollo/client";
import {PaginatedScholarlyArticle} from "./__generated__/graphql";

const client = new ApolloClient({
    uri: 'https://opendatanavigator-test.switch.ch/api/graphql',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    searchArticle: {
                        // Don't cache separate results based on
                        // any of this field's arguments.
                        keyArgs: false,

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

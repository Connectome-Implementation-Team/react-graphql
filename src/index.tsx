import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {PaginatedScholarlyArticle} from "./__generated__/graphql";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'https://opendatanavigator-test.switch.ch/api/graphql',
});

// https://www.apollographql.com/docs/react/networking/authentication/
const authLink = setContext((_, {headers}) => {

    const token = process.env.REACT_APP_NOT_SECRET_CODE;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
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
                            //console.log('cache', existing)

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
        <StrictMode>
            <App/>
        </StrictMode>
    </ApolloProvider>
    ,
);

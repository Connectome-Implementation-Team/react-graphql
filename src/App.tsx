import React from 'react';
import './App.css';
import {DocumentNode, QueryResult, useQuery} from '@apollo/client';
import {gql} from './__generated__/gql';
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {ArticlesQuery, ArticlesQueryVariables} from "./__generated__/graphql";

const GET_ARTICLES: TypedDocumentNode<ArticlesQuery, ArticlesQueryVariables> = gql(/* GraphQL */ `
  query ARTICLES {
    searchArticle(query: "artificial") {
      totalCount
      edges {
        node {
          iri
          name
          sameAs
        }
      }
    }
  }
`);

export function DisplayArticles() {

    console.log(GET_ARTICLES)

    const {loading, data}: QueryResult<ArticlesQuery, ArticlesQueryVariables> = useQuery(
        GET_ARTICLES
    );

    return (
        <div>
            <h3>Available articles</h3>
            {loading ? (
                <p>Loading ...</p>
            ) : (
                <div>
                    <span>{data && data?.searchArticle.totalCount}</span>
                    <ul>
                        {data && data.searchArticle?.edges?.map(edge => (<li key={edge.node.iri}><a href={edge.node.sameAs ? edge.node.sameAs[0] : undefined } target="_blank no-referrer">{edge.node.name}</a></li>))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default function App() {
    return (
        <div>
            <h2>My first Apollo app 🚀</h2>
            <DisplayArticles/>
        </div>
    );
}


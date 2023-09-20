import React from 'react';
import './App.css';
import {DocumentNode, InMemoryCache, QueryResult, useQuery} from '@apollo/client';
import {gql} from './__generated__/gql';
import {TypedDocumentNode} from "@graphql-typed-document-node/core";
import {ArticleList} from "./ArticleList";
import {ScholarlyArticleEdge} from "./__generated__/graphql";

const GET_ARTICLES = gql(/* GraphQL */ `
  query ARTICLES($first: Int, $after: String) {
    searchArticle(query: "artificial", first: $first, after: $after) {
      totalCount
      edges {
      cursor
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

    const {loading, data, fetchMore} = useQuery(
        GET_ARTICLES,
        {
            variables: {
                first: 10,
                after: undefined
            }
        }
    );

    return (
        <div>
            <h3>Available articles</h3>
            {loading ? (
                <p>Loading ...</p>
            ) : (
                <div>
                <span>{data?.searchArticle?.totalCount}</span>

                <ArticleList
                    articles={data?.searchArticle?.edges || []}
                    onLoadMore={() => fetchMore({
                        variables: {
                            after: (data?.searchArticle?.edges as ScholarlyArticleEdge[])[(data?.searchArticle?.edges as ScholarlyArticleEdge[]).length - 1].cursor
                        },
                    })}
                />

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


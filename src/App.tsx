import React, {useState} from 'react';
import './App.scss';
import {useLazyQuery} from '@apollo/client';
import {gql} from './__generated__/gql';
import {ArticleList} from "./ArticleList";
import {ScholarlyArticleEdge} from "./__generated__/graphql";

const GET_ARTICLES = gql(/* GraphQL */ `
  query ARTICLES($query: String!, $first: Int, $after: String) {
    searchScholarlyArticle(query: $query, first: $first, after: $after) {
      totalCount
      edges {
      cursor
        node {
          iri
          name
          sameAs
          abstract
          author {
            __typename
            ... on Person {
                name
                sameAs
            }
          }
        }
      }
    }
  }
`);


export function DisplayArticles() {

    const [value, setValue] = useState("artificial");

    const [
        getArticles,
        {loading, data, fetchMore}
    ] = useLazyQuery(
        GET_ARTICLES,
        {
            variables: {
                query: value,
                first: 10,
                after: undefined
            }
        }
    );

    return (
        <div>
            <h3>Available articles</h3>

            <input value={value} onChange={(e) => {
                setValue(e.target.value)
            }}/>

            <button onClick={() => getArticles()}>Search</button>

            {loading ? (
                <p>Loading ...</p>
            ) : (
                <div>
                    <span>{data?.searchScholarlyArticle?.totalCount}</span>

                    <ArticleList
                        articleEdges={(data?.searchScholarlyArticle?.edges as ScholarlyArticleEdge[]) || null}
                        onLoadMore={() => fetchMore({
                            variables: {
                                after: (data?.searchScholarlyArticle?.edges as ScholarlyArticleEdge[])[(data?.searchScholarlyArticle?.edges as ScholarlyArticleEdge[]).length - 1]?.cursor
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
            <DisplayArticles/>
        </div>
    );
}


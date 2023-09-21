import React, {useRef, useState} from 'react';
import './App.css';
import {useLazyQuery, useQuery} from '@apollo/client';
import {gql} from './__generated__/gql';
import {ArticleList} from "./ArticleList";
import {ScholarlyArticleEdge} from "./__generated__/graphql";

const GET_ARTICLES = gql(/* GraphQL */ `
  query ARTICLES($query: String!, $first: Int, $after: String) {
    searchArticle(query: $query, first: $first, after: $after) {
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
                    <span>{data?.searchArticle?.totalCount}</span>

                    <ArticleList
                        articleEdges={data?.searchArticle?.edges || []}
                        onLoadMore={() => fetchMore({
                            variables: {
                                after: (data?.searchArticle?.edges as ScholarlyArticleEdge[])[(data?.searchArticle?.edges as ScholarlyArticleEdge[]).length - 1]?.cursor
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


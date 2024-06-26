import React, {useState} from 'react';
import './App.scss';
import {useLazyQuery, useQuery} from '@apollo/client';
import {gql} from './__generated__/gql';
import {ArticleList} from "./ArticleList";
import {ScholarlyArticleEdge} from "./__generated__/graphql";
import {client} from "./index";

const GET_ARTICLES = gql(/* GraphQL */ `
  query ARTICLES($query: String!, $first: Int, $after: String) {
    searchScholarlyArticle(query: $query, first: $first, after: $after) {
      totalCount
      hasNextPage
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

    //console.log('init')

    const [value, setValue] = useState("artificial");
    const [skip, setSkip] = useState(true);

    /*const [
        getArticles,
        {loading, data, fetchMore, client}
    ] = useLazyQuery(
        GET_ARTICLES,
        {
            variables: {
                query: value,
                first: 10,
                after: undefined,
            },
        },
    );*/

    //const getArticles = () => {
    const { data, loading, fetchMore  } = useQuery(GET_ARTICLES, { variables: {
            query: value,
            first: 10,
            after: undefined
        }, skip: skip, client: client})
    //}

    console.log()

    return (
        <div>
            <h3>Available articles</h3>

            <input value={value} onChange={(e) => {

                //console.log('value was changed ', value);

                setSkip(true);
                setValue(e.target.value)
            }}/>

                <button disabled={data !== undefined} onClick={() => setSkip(false)}>Search</button>

            {loading ? (
                <p>Loading ...</p>
            ) : (
                data &&  (<div className="content">
                    <div>Total: {data?.searchScholarlyArticle?.totalCount}</div>

                        {<ArticleList
                        articleEdges={(data?.searchScholarlyArticle?.edges as ScholarlyArticleEdge[]) || null}
                        hasNextPage={data?.searchScholarlyArticle?.hasNextPage}
                        onLoadMore={() => fetchMore({
                            variables: {
                                after: (data?.searchScholarlyArticle?.edges as ScholarlyArticleEdge[])[(data?.searchScholarlyArticle?.edges as ScholarlyArticleEdge[]).length - 1]?.cursor
                            },
                        })}
                    />}

                </div>)
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


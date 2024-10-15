import {gql} from "./__generated__";
import React, {useState} from "react";
import {useQuery} from "@apollo/client";
import {client} from "./index";
import {ArticleList} from "./ArticleList";
import {ArticlesQuery, ArticlesQueryVariables, ScholarlyArticleEdge} from "./__generated__/graphql";
import {TypedDocumentNode} from "@graphql-typed-document-node/core";

const GET_ARTICLES: TypedDocumentNode<ArticlesQuery, ArticlesQueryVariables> = gql(/* GraphQL */ `
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

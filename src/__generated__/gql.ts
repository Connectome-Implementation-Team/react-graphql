/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query ARTICLES($query: String!, $first: Int, $after: String) {\n        searchScholarlyArticle(query: $query, first: $first, after: $after) {\n            totalCount\n            hasNextPage\n            edges {\n                cursor\n                node {\n                    iri\n                    name\n                    sameAs\n                    abstract\n                    author {\n                        __typename\n                        ... on Person {\n                            name\n                            sameAs\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.ArticlesDocument,
    "\n\n\n\n    query FETCH($iri: ID!) {\n        \n        fetch(iri: $iri) {\n            __typename\n        \n            ... on ScholarlyArticle {\n                iri\n                name\n                abstract\n                description\n                author {\n                    ... on Person {\n                        name\n                    }\n                }\n            }\n            \n            ... on Book {\n                name\n                description\n            }\n            \n            ... on Dataset {\n                name\n                description\n            }\n            \n            ... on ResearchProject {\n                name\n                description\n            }\n            \n            ... on Person {\n                name\n                description\n            }\n             \n            ... on ArchiveComponent {\n                name\n                description\n            }\n            \n            ... on Organization {\n                name\n                description\n            }    \n            \n            ... on ArchiveOrganization {\n                name\n                description\n            }\n        }\n    }\n": types.FetchDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ARTICLES($query: String!, $first: Int, $after: String) {\n        searchScholarlyArticle(query: $query, first: $first, after: $after) {\n            totalCount\n            hasNextPage\n            edges {\n                cursor\n                node {\n                    iri\n                    name\n                    sameAs\n                    abstract\n                    author {\n                        __typename\n                        ... on Person {\n                            name\n                            sameAs\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query ARTICLES($query: String!, $first: Int, $after: String) {\n        searchScholarlyArticle(query: $query, first: $first, after: $after) {\n            totalCount\n            hasNextPage\n            edges {\n                cursor\n                node {\n                    iri\n                    name\n                    sameAs\n                    abstract\n                    author {\n                        __typename\n                        ... on Person {\n                            name\n                            sameAs\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\n\n\n    query FETCH($iri: ID!) {\n        \n        fetch(iri: $iri) {\n            __typename\n        \n            ... on ScholarlyArticle {\n                iri\n                name\n                abstract\n                description\n                author {\n                    ... on Person {\n                        name\n                    }\n                }\n            }\n            \n            ... on Book {\n                name\n                description\n            }\n            \n            ... on Dataset {\n                name\n                description\n            }\n            \n            ... on ResearchProject {\n                name\n                description\n            }\n            \n            ... on Person {\n                name\n                description\n            }\n             \n            ... on ArchiveComponent {\n                name\n                description\n            }\n            \n            ... on Organization {\n                name\n                description\n            }    \n            \n            ... on ArchiveOrganization {\n                name\n                description\n            }\n        }\n    }\n"): (typeof documents)["\n\n\n\n    query FETCH($iri: ID!) {\n        \n        fetch(iri: $iri) {\n            __typename\n        \n            ... on ScholarlyArticle {\n                iri\n                name\n                abstract\n                description\n                author {\n                    ... on Person {\n                        name\n                    }\n                }\n            }\n            \n            ... on Book {\n                name\n                description\n            }\n            \n            ... on Dataset {\n                name\n                description\n            }\n            \n            ... on ResearchProject {\n                name\n                description\n            }\n            \n            ... on Person {\n                name\n                description\n            }\n             \n            ... on ArchiveComponent {\n                name\n                description\n            }\n            \n            ... on Organization {\n                name\n                description\n            }    \n            \n            ... on ArchiveOrganization {\n                name\n                description\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
import React from "react";

// @ts-ignore
export const ArticleList = ({ articles, onLoadMore }) => {

    return (
        <div>
        <ul>
            {articles?.map((edge: any) => (
                <li key={edge?.node.iri}><a href={edge?.node.sameAs ? edge.node.sameAs[0] : undefined}
                                           target="_blank no-referrer">{edge?.node.name}</a></li>))}
        </ul>

            <button onClick={onLoadMore}>Load More</button>
        </div>
    )

}

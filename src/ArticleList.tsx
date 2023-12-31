import React from "react";
import {Maybe, ScholarlyArticleEdge} from "./__generated__/graphql";

export const ArticleList = ({articleEdges, onLoadMore}: { articleEdges: Maybe<ScholarlyArticleEdge[]>, onLoadMore: () => void }) => {

    return (

        articleEdges === null ? (
            <div>No results yet</div>
        ) : (
            <div>
                <ul>
                    {articleEdges?.map((edge: ScholarlyArticleEdge) => (

                        <li key={edge?.node.iri}><a href={edge?.node.sameAs ? edge.node.sameAs[0] : undefined}
                                                    target="_blank no-referrer">{edge?.node.name}</a> ({edge?.node.author.map(
                            auth => auth.sameAs ? <span><a href={auth.sameAs[0]} target="_blank no-referrer">{auth.name}</a> </span> : <span>{auth.name} </span>
                        )})</li>))}
                </ul>

                <button onClick={onLoadMore}>Load More</button>
            </div>

        )
    )

}

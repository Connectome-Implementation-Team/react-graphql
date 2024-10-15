import {gql} from "./__generated__";
import {useQuery} from "@apollo/client";
import {ScholarlyArticleDisplay} from "./ScholarlyArticleDisplay";




const FETCH_RESOURCE = gql(`



    query FETCH($iri: ID!) {
        
        fetch(iri: $iri) {
            __typename
        
            ... on ScholarlyArticle {
                iri
                name
                abstract
                description
                author {
                    ... on Person {
                        name
                    }
                }
            }
            
            ... on Book {
                name
                description
            }
            
            ... on Dataset {
                name
                description
            }
            
            ... on ResearchProject {
                name
                description
            }
            
            ... on Person {
                name
                description
            }
             
            ... on ArchiveComponent {
                name
                description
            }
            
            ... on Organization {
                name
                description
            }    
            
            ... on ArchiveOrganization {
                name
                description
            }
        }
    }
`);

export const Resource = ({id}: { id: string }) => {
    const {data, loading, error, ...rest} = useQuery(FETCH_RESOURCE, {
        variables: {
            iri: id
        }
    })

    //console.log(data, rest)

    if (loading) {
        return <div>loading</div>;
    } else if (error) {
        return <div>Error</div>;
    }

    if (data?.fetch.__typename === 'ScholarlyArticle') {

        return <ScholarlyArticleDisplay author={[]} iri={data.fetch.iri} __typename={data.fetch.__typename} name={data.fetch.name}
                                        abstract={data.fetch.abstract}></ScholarlyArticleDisplay>
    }

    return <>
        <div>

            {data?.fetch?.__typename}

            {data?.fetch && data.fetch.name}

            {data?.fetch && data.fetch.description}


        </div>
    </>
}

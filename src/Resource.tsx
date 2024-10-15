import {gql} from "./__generated__";
import {useQuery} from "@apollo/client";

const FETCH_RESOURCE = gql(`

    query FETCH($iri: ID!) {
        
        fetch(iri: $iri) {
            ... on ScholarlyArticle {
                name
            }
            
            ... on Book {
                name
            }
            
            ... on Dataset {
                name
            }
            
            ... on ResearchProject {
                name
            }
            
            ... on Person {
                name
            }
             
            ... on ArchiveComponent {
                name
            }
            
            ... on Organization {
                name
            }    
            
            ... on ArchiveOrganization {
                name
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

    console.log(data)

    return <>
        <div>
            {data?.fetch && data.fetch.name}
        </div>
    </>
}

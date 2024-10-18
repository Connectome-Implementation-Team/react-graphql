import {ScholarlyArticle} from "./__generated__/graphql";

export const ScholarlyArticleDisplay = ({ name, abstract, author}: ScholarlyArticle) => {


    return <>
        <div>



            <div>
                {name}
            </div>

            {abstract && <div>
                {abstract}
            </div>}

            <div>
                {author.map(
                    auth => (<div key={auth.iri}>{auth.name}</div>)
                )}
            </div>

        </div>
    </>

}

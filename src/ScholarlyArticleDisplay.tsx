import {ScholarlyArticle} from "./__generated__/graphql";

export const ScholarlyArticleDisplay = ({ name, abstract}: ScholarlyArticle) => {


    return <>
        <div>



            <div>
                {name}
            </div>

            {abstract && <div>
                {abstract}
            </div>}

        </div>
    </>

}

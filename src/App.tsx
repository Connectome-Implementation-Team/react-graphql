import React, {useState} from 'react';
import './App.scss';
import {useLazyQuery, useQuery} from '@apollo/client';
import {gql} from './__generated__/gql';
import {ArticleList} from "./ArticleList";
import {ScholarlyArticleEdge} from "./__generated__/graphql";
import {client} from "./index";
import {Resource} from "./Resource";
import {DisplayArticles} from "./DisplayArticles";



export default function App() {
    return (
        <div>
            <DisplayArticles/>
            <Resource id='https://data.connectome.ch/serval/scholarlyarticle/serval%3aBIB_2C13A1E8394E'></Resource>
        </div>
    );
}


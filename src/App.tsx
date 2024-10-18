import React from 'react';
import './App.scss';
import {Resource} from "./Resource";
import {DisplayArticles} from "./DisplayArticles";


export default function App() {
    return (
        <div>
            <DisplayArticles/>

            <Resource id='https://data.connectome.ch/serval/scholarlyarticle/serval%3aBIB_4C1E4150D1C1'></Resource>
        </div>
    );
}


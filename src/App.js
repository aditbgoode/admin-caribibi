
// in src/App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList, PostEdit, PostCreate } from './posts';
import { CariList, CariEdit } from './caribibi';
import { BibiList, BibiEdit } from './bibi';
import { ReportList } from './report';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="caribibi" list={CariList} edit={CariEdit} />
        <Resource name="bibi" list={BibiList} edit={BibiEdit} />
        <Resource name="report" list={ReportList} />
    </Admin>
);

export default App;
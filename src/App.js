
// in src/App.js

import React from 'react';
import './App.css';
import { Admin, Resource, Delete } from 'admin-on-rest';
import jsonRestClient from 'aor-json-rest-client';
import data from './data.json';

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserEdit, UserCreate } from './users';

const App = () => (
    <Admin restClient={jsonRestClient(data)}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}/>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete}/>
    </Admin>
);

export default App;
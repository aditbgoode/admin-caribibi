
// in src/App.js

import React from 'react';
import './App.css';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { RestClient, AuthClient } from 'aor-firebase-client';
import firebase from 'firebase';

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserEdit, UserCreate } from './users';


var config = {
    apiKey: "AIzaSyCh41uy_caoENtumA03wyLlGhqFvqHqnRk",
    authDomain: "yworks-4c832.firebaseapp.com",
    databaseURL: "https://yworks-4c832.firebaseio.com",
    storageBucket: "yworks-4c832.appspot.com",
    messagingSenderId: "590970024617"
};

const trackedResources = ['posts', 'users'];

firebase.initializeApp(config);

const App = () => (
    <Admin restClient={RestClient(trackedResources, config)}  authClient={AuthClient}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}/>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete}/>
    </Admin>
);

export default App;
// in src/posts.js
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';


export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="fullname" />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>Post {record ? `"${record.fullname}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="username" />
            <LongTextInput source="fullname" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <LongTextInput source="fullname" />
        </SimpleForm>
    </Create>
);
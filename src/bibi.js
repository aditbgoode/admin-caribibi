// in src/bibi.js
import React from 'react';
import { List, Edit, Create, Datagrid, EmailField, TextField, SimpleForm, TextInput, DisabledInput, EmailInput, LongTextInput, SelectInput } from 'admin-on-rest';

export const BibiList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address" />
            <TextField source="status" />
        </Datagrid>
    </List>
);

const BibiTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const BibiEdit = (props) => (
    <Edit title={<BibiTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />    
            <TextInput source="name" />
            <TextInput source="username" />
            <EmailInput source="email" />
            <LongTextInput source="address" />
            <SelectInput source="status" choices={[
                { id: 'active', name: 'Active' },
                { id: 'suspend', name: 'Suspend' },
            ]} />
        </SimpleForm>
    </Edit>
);
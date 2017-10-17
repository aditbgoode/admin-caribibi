// in src/report.js
import React from 'react';
import { Filter, ReferenceInput, List, Edit, Create, Datagrid, EmailField, TextField, SimpleForm, TextInput, DisabledInput, LongTextInput, SelectInput } from 'admin-on-rest';

const ReportFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const ReportList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" /> //nama yang dilaporkan
            <TextField source="position" /> //caribibi atau sebagai bibi
            <TextField source="star" /> //jumlah bintang
            <TextField source="comment" /> //isi komentar
            <TextField source="reporter" /> //yang kasih komentar
        </Datagrid>
    </List>
);

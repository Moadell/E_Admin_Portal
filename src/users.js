import * as React from "react";
import { List, Datagrid, TextField, EmailField,
    Show,
    Create,
    Edit,
    SimpleShowLayout,
    SimpleForm,
    TextInput,
    } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="displayName" />
            <EmailField source="email" />
            <TextField source="university" />
            <TextField source="role" />

        </Datagrid>
    </List>
);
export const UserShow = (props) => (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="displayName" />
        <TextField source="username" />
        <TextField source="createdate" />
        <TextField source="lastupdate" />
        <TextField source="role" />
      </SimpleShowLayout>
    </Show>
);
export const UserEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="displayName" />
        <TextInput source="email" />
        <TextInput source="university" />
        <TextInput source="role" />
         </SimpleForm>   
         </Edit>
);
export const UserCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="displayName" />
        <TextInput source="email" />
        <TextInput source="university" />
        </SimpleForm>   
         </Create>
);

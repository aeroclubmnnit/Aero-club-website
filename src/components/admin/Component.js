import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  EditButton,
  ImageField,
  List,
  number,
  NumberInput,
  required,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from "react-admin";

export const ComponentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" label="Type" />
        <ImageField source="image_url" label="Image" />
        <TextField source="available" />
        <TextField source="issued" />
        <EditButton basePath="/component" />
        <DeleteButton basePath="/component" />
      </Datagrid>
    </List>
  );
};

export const ComponentCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/component">
        <TextInput source="name" label="Name" validate={[required()]} />
        <TextInput source="type" label="Type" validate={[required()]} />
        <TextInput source="image_url" label="Component Image Link" validate={[required()]} />
        <NumberInput source="available" validate={[required(), number()]} />
      </SimpleForm>
    </Create>
  );
};

export const ComponentEdit = (props) => {
  return (
    <Edit title="Review Request" {...props}>
      <SimpleForm redirect="/component">
        <TextInput disabled label="Id" source="id" />
      </SimpleForm>
    </Edit>
  );
};

export const ComponentShow = (props) => {
  return (
    <Show {...props} title="Component Show">
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" label="Type" />
        <ImageField source="image_url" label="Image" />
        <TextField source="available" />
        <TextField source="issued" />
      </SimpleShowLayout>
    </Show>
  )
}


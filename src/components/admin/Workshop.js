import React from "react";
import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  DeleteButton,
  Edit,
  EditButton,
  List,
  required,
  RichTextField,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  UrlField,
  ImageField,
} from "react-admin";
import RichTextQuill from "./RichTextQuill";

export const WorkshopList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <DateField source="date" label="Date" />
        <ShowButton basePath="/workshop" />
        <EditButton basePath="/workshop" />
        <DeleteButton basePath="/workshop" />
      </Datagrid>
    </List>
  );
};

export const WorkshopCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="/workshop">
        <TextInput source="name" label="Name" validate={required()} />
        <TextInput
          source="target"
          label="Target Audience"
          validate={required()}
        />
        <TextInput
          source="prerequisites"
          label="Prerequisites"
          validate={required()}
        />
        <TextInput source="pic" label="Image Link ( Optional )" />
        <TextInput
          source="brochure"
          label="Brochure Link"
          validate={required()}
        />
        <RichTextQuill source="about" label="About" />
        <DateInput
          source="date"
          label="Date"
          defaultValue={new Date()}
          validate={required()}
        />
      </SimpleForm>
    </Create>
  );
};

export const WorkshopShow = (props) => {
  return (
    <Show {...props} title="Workshop Show">
      <SimpleShowLayout>
        <TextField source="name" label="Name" />
        <TextField source="target" label="Target Audience" />
        <TextField source="prerequisites" />
        <ImageField source="pic" label="Image" />
        <UrlField source="brochure" label="Brochure Link" target="_blank" />
        <RichTextField source="about" label="About" />
        <DateField source="date" label="date" />
      </SimpleShowLayout>
    </Show>
  );
};

export const WorkshopEdit = (props) => {
  return (
    <Edit title="Edit Workshop" {...props}>
      <SimpleForm redirect="/workshop">
        <TextInput source="name" label="Name" validate={required()} />
        <TextInput
          source="target"
          label="Target Audience"
          validate={required()}
        />
        <TextInput
          source="prerequisites"
          label="Prerequisites"
          validate={required()}
        />
        <TextInput source="pic" label="Image Link ( Optional )" />
        <TextInput
          source="brochure"
          label="Brochure Link"
          validate={required()}
        />
        <RichTextQuill source="about" label="About" />
        <DateInput
          source="date"
          label="Date"
          defaultValue={new Date()}
          validate={required()}
        />
      </SimpleForm>
    </Edit>
  );
};

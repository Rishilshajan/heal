import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DoctorTitle } from "../doctor/DoctorTitle";

export const ScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="availableFrom" source="availableFrom" />
        <DateTimeInput label="availableTo" source="availableTo" />
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

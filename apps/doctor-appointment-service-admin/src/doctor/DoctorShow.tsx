import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DOCTOR_TITLE_FIELD } from "./DoctorTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DoctorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="consultationFee" source="consultationFee" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="specialization" source="specialization" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Appointment"
          target="doctorId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <TextField label="appointmentTime" source="appointmentTime" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="tokenNumber" source="tokenNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Schedule"
          target="doctorId"
          label="Schedules"
        >
          <Datagrid rowClick="show">
            <TextField label="availableFrom" source="availableFrom" />
            <TextField label="availableTo" source="availableTo" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Doctor"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

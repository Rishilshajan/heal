import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PatientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  disease?: string | null;
  user?: UserWhereUniqueInput | null;
};

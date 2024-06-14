import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PatientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  disease?: string | null;
  user?: UserWhereUniqueInput | null;
};

import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  appointmentTime?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  status?: "Option1" | null;
  tokenNumber?: number | null;
};

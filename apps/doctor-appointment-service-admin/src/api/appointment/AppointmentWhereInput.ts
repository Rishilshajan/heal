import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AppointmentWhereInput = {
  appointmentTime?: DateTimeNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  status?: "Option1";
  tokenNumber?: IntNullableFilter;
};

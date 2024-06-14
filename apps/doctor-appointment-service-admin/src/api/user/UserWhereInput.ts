import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";

export type UserWhereInput = {
  doctors?: DoctorListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  patients?: PatientListRelationFilter;
  phone?: StringNullableFilter;
  role?: "Option1";
  username?: StringFilter;
};

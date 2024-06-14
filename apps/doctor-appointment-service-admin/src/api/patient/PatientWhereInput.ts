import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PatientWhereInput = {
  appointments?: AppointmentListRelationFilter;
  disease?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};

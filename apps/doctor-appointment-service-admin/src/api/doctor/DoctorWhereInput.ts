import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorWhereInput = {
  appointments?: AppointmentListRelationFilter;
  consultationFee?: FloatNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  schedules?: ScheduleListRelationFilter;
  specialization?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

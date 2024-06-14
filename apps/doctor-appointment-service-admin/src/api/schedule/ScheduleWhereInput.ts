import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ScheduleWhereInput = {
  availableFrom?: DateTimeNullableFilter;
  availableTo?: DateTimeNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
};

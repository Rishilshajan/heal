import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type ScheduleCreateInput = {
  availableFrom?: Date | null;
  availableTo?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
};

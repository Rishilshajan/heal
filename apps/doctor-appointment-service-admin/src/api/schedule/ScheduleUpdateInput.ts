import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type ScheduleUpdateInput = {
  availableFrom?: Date | null;
  availableTo?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
};

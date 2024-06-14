import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";
import { ScheduleUpdateManyWithoutDoctorsInput } from "./ScheduleUpdateManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  consultationFee?: number | null;
  location?: string | null;
  schedules?: ScheduleUpdateManyWithoutDoctorsInput;
  specialization?: string | null;
  user?: UserWhereUniqueInput | null;
};

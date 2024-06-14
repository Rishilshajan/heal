import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";
import { ScheduleCreateNestedManyWithoutDoctorsInput } from "./ScheduleCreateNestedManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  consultationFee?: number | null;
  location?: string | null;
  schedules?: ScheduleCreateNestedManyWithoutDoctorsInput;
  specialization?: string | null;
  user?: UserWhereUniqueInput | null;
};

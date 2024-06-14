import { DoctorUpdateManyWithoutUsersInput } from "./DoctorUpdateManyWithoutUsersInput";
import { PatientUpdateManyWithoutUsersInput } from "./PatientUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  doctors?: DoctorUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  patients?: PatientUpdateManyWithoutUsersInput;
  phone?: string | null;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};

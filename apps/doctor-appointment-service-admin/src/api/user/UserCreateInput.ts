import { DoctorCreateNestedManyWithoutUsersInput } from "./DoctorCreateNestedManyWithoutUsersInput";
import { PatientCreateNestedManyWithoutUsersInput } from "./PatientCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  doctors?: DoctorCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  patients?: PatientCreateNestedManyWithoutUsersInput;
  phone?: string | null;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
};

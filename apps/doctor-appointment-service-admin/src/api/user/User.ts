import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  doctors?: Array<Doctor>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  patients?: Array<Patient>;
  phone: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

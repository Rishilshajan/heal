import { Appointment } from "../appointment/Appointment";
import { User } from "../user/User";

export type Patient = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  disease: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};

import { Appointment } from "../appointment/Appointment";
import { Schedule } from "../schedule/Schedule";
import { User } from "../user/User";

export type Doctor = {
  appointments?: Array<Appointment>;
  consultationFee: number | null;
  createdAt: Date;
  id: string;
  location: string | null;
  schedules?: Array<Schedule>;
  specialization: string | null;
  updatedAt: Date;
  user?: User | null;
};

import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  appointmentTime: Date | null;
  createdAt: Date;
  doctor?: Doctor | null;
  id: string;
  patient?: Patient | null;
  status?: "Option1" | null;
  tokenNumber: number | null;
  updatedAt: Date;
};

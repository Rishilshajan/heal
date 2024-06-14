import { Doctor } from "../doctor/Doctor";

export type Schedule = {
  availableFrom: Date | null;
  availableTo: Date | null;
  createdAt: Date;
  doctor?: Doctor | null;
  id: string;
  updatedAt: Date;
};

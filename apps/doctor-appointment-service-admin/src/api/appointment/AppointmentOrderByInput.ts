import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentTime?: SortOrder;
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  status?: SortOrder;
  tokenNumber?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  consultationFee?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

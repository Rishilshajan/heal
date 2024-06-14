import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  availableFrom?: SortOrder;
  availableTo?: SortOrder;
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

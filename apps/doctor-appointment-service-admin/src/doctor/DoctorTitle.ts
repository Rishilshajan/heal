import { Doctor as TDoctor } from "../api/doctor/Doctor";

export const DOCTOR_TITLE_FIELD = "location";

export const DoctorTitle = (record: TDoctor): string => {
  return record.location?.toString() || String(record.id);
};

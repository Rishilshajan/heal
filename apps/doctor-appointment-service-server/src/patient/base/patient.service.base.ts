/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Patient as PrismaPatient,
  Appointment as PrismaAppointment,
  User as PrismaUser,
} from "@prisma/client";

export class PatientServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PatientCountArgs, "select">): Promise<number> {
    return this.prisma.patient.count(args);
  }

  async patients<T extends Prisma.PatientFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientFindManyArgs>
  ): Promise<PrismaPatient[]> {
    return this.prisma.patient.findMany<Prisma.PatientFindManyArgs>(args);
  }
  async patient<T extends Prisma.PatientFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientFindUniqueArgs>
  ): Promise<PrismaPatient | null> {
    return this.prisma.patient.findUnique(args);
  }
  async createPatient<T extends Prisma.PatientCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientCreateArgs>
  ): Promise<PrismaPatient> {
    return this.prisma.patient.create<T>(args);
  }
  async updatePatient<T extends Prisma.PatientUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientUpdateArgs>
  ): Promise<PrismaPatient> {
    return this.prisma.patient.update<T>(args);
  }
  async deletePatient<T extends Prisma.PatientDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PatientDeleteArgs>
  ): Promise<PrismaPatient> {
    return this.prisma.patient.delete(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.patient
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.patient
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}

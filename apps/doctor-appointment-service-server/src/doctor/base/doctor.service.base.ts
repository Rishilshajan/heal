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
  Doctor as PrismaDoctor,
  Appointment as PrismaAppointment,
  Schedule as PrismaSchedule,
  User as PrismaUser,
} from "@prisma/client";

export class DoctorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DoctorCountArgs, "select">): Promise<number> {
    return this.prisma.doctor.count(args);
  }

  async doctors<T extends Prisma.DoctorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorFindManyArgs>
  ): Promise<PrismaDoctor[]> {
    return this.prisma.doctor.findMany<Prisma.DoctorFindManyArgs>(args);
  }
  async doctor<T extends Prisma.DoctorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorFindUniqueArgs>
  ): Promise<PrismaDoctor | null> {
    return this.prisma.doctor.findUnique(args);
  }
  async createDoctor<T extends Prisma.DoctorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorCreateArgs>
  ): Promise<PrismaDoctor> {
    return this.prisma.doctor.create<T>(args);
  }
  async updateDoctor<T extends Prisma.DoctorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorUpdateArgs>
  ): Promise<PrismaDoctor> {
    return this.prisma.doctor.update<T>(args);
  }
  async deleteDoctor<T extends Prisma.DoctorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DoctorDeleteArgs>
  ): Promise<PrismaDoctor> {
    return this.prisma.doctor.delete(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.doctor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }

  async findSchedules(
    parentId: string,
    args: Prisma.ScheduleFindManyArgs
  ): Promise<PrismaSchedule[]> {
    return this.prisma.doctor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .schedules(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.doctor
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}

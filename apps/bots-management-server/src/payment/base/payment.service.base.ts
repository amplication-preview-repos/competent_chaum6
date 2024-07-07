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
  Payment as PrismaPayment,
  User as PrismaUser,
} from "@prisma/client";

export class PaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PaymentCountArgs, "select">): Promise<number> {
    return this.prisma.payment.count(args);
  }

  async payments(args: Prisma.PaymentFindManyArgs): Promise<PrismaPayment[]> {
    return this.prisma.payment.findMany(args);
  }
  async payment(
    args: Prisma.PaymentFindUniqueArgs
  ): Promise<PrismaPayment | null> {
    return this.prisma.payment.findUnique(args);
  }
  async createPayment(args: Prisma.PaymentCreateArgs): Promise<PrismaPayment> {
    return this.prisma.payment.create(args);
  }
  async updatePayment(args: Prisma.PaymentUpdateArgs): Promise<PrismaPayment> {
    return this.prisma.payment.update(args);
  }
  async deletePayment(args: Prisma.PaymentDeleteArgs): Promise<PrismaPayment> {
    return this.prisma.payment.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.payment
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}

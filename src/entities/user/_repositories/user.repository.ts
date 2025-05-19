import prisma from "@/shared/lib/db";
import { UserEntity, UserId } from "../_domain/types";

export class UserRepository {
  async getUserById(userId: UserId): Promise<UserEntity> {
    return prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });
  }

  async createUser(user: UserEntity): Promise<UserEntity> {
    return await prisma.user.create({
      data: user,
    });
  }
}

export const userRepository = new UserRepository();
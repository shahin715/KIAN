import bcrypt from "bcryptjs";
import prisma from "../../config/prisma";
import { generateToken } from "../../utils/jwt";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const existingUser =
    await prisma.user.findUnique({
      where: { email },
    });

  if (existingUser) {
    throw new Error(
      "User already exists"
    );
  }

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const user =
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

  const { password: _, ...safeUser } =
    user;

  return safeUser;
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const user =
    await prisma.user.findUnique({
      where: { email },
    });

  if (!user) {
    throw new Error(
      "Invalid credentials"
    );
  }

  const isPasswordValid =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isPasswordValid) {
    throw new Error(
      "Invalid credentials"
    );
  }

  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  const { password: _, ...safeUser } =
    user;

  return {
    user: safeUser,
    token,
  };
};
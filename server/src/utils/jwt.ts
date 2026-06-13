import jwt, { Secret, SignOptions } from "jsonwebtoken";

export const generateToken = (
  payload: {
    userId: string;
    email: string;
    role: string;
  }
) => {
  const secret = process.env.JWT_ACCESS_SECRET as Secret;

  const options: SignOptions = {
    expiresIn: "7d",
  };

  return jwt.sign(
    payload,
    secret,
    options
  );
};
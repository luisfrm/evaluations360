import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

type Role = "admin" | "manager" | "employee";

interface AppRequest extends Request {
  user: {
    userId: string;
    email: string;
    username: string;
    role: Role;
  };
}

export interface TokenPayload extends JwtPayload {
  userId: string;
  role: Role;
  email: string;
  username: string;
  tokenExpiration: Date;
}

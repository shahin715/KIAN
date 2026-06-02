"use client";

import { ReactNode } from "react";
import useAuthStore from "@/features/auth/store/authStore";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const { isAuthenticated } =
    useAuthStore();

  if (!isAuthenticated) {
    return <div>Please Login</div>;
  }

  return <>{children}</>;
}
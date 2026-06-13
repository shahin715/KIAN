"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { loginUser } from "@/features/auth/services/authService";
import useAuthStore from "@/features/auth/store/authStore";

export default function LoginForm() {
  const router = useRouter();

  const { setUser } = useAuthStore();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
    const response =
  await loginUser({
    email,
    password,
  });

const { user, token } =
  response.data;

      setUser(user, token);

      router.push("/");
    } catch (error) {
      if (
        axios.isAxiosError(error)
      ) {
        console.error(
          error.response?.data
        );
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border p-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="border p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
import api from "@/services/api";

interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (
  data: LoginPayload
) => {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};
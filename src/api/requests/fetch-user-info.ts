import { fetcher } from "@/api/fetcher";
import { User } from "@/shared/types/user";

export const fetchUserInfo = async (): Promise<User> => {
  const response = await fetcher.get("/me");

  return response.data;
};

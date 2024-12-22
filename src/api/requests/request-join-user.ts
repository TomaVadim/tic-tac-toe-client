import { JoinUser } from "@/shared/types/user";
import { fetcher } from "@/api/fetcher";

export const requestJoinUser = async (): Promise<JoinUser> => {
  const response = await fetcher.post("/join");

  return response.data;
};

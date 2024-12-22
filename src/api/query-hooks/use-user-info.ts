import { User } from "@/shared/types/user";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { fetchUserInfo } from "@/api/requests/fetch-user-info";

export const useUserInfo = (
  options?: Omit<UseQueryOptions<User, AxiosError>, "queryKey" | "queryFn">
): UseQueryResult<User, AxiosError> => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: fetchUserInfo,
    ...options,
  });
};

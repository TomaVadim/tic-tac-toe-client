import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import { JoinUser } from "@/shared/types/user";
import { requestJoinUser } from "@/api/requests/request-join-user";

export const useJoinUser = (
  options?: Omit<UseQueryOptions<JoinUser, AxiosError>, "queryKey" | "queryFn">
): UseQueryResult<JoinUser, AxiosError> => {
  return useQuery({
    queryKey: ["join-user"],
    queryFn: requestJoinUser,
    ...options,
  });
};

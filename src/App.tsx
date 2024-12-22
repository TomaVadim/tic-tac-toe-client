// import { useUserInfo } from "./api/query-hooks/use-user-info";
// import { Loader } from "./ui/loader";
import { JSX, PropsWithChildren } from "react";
import { AppProvider } from "./providers/app-provider";

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  // const { data, isLoading } = useUserInfo({ staleTime: 1000 * 60 * 5 });

  // if (isLoading) {
  //   return <Loader size="large" />;
  // }

  return <AppProvider>{children}</AppProvider>;
};

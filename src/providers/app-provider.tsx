import { JSX, PropsWithChildren } from "react";

export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <>{children}</>;
};

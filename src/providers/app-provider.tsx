import { JSX, PropsWithChildren } from "react";

import { SocketProvider } from "./socket-provider";

export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <SocketProvider>{children}</SocketProvider>;
};

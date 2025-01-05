import { socket, SocketContext } from "@/contexts/socket.context";
import { PropsWithChildren } from "react";

export const SocketProvider = ({ children }: PropsWithChildren) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

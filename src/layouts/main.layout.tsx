import { App } from "@/App";
import { Outlet } from "react-router";

export const MainLayout = (): JSX.Element => {
  return (
    <App>
      <Outlet />
    </App>
  );
};

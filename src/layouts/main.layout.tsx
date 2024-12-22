import { App } from "@/App";
import { JSX } from "react";
import { Outlet } from "react-router";

export const MainLayout = (): JSX.Element => {
  return (
    <App>
      <Outlet />
    </App>
  );
};

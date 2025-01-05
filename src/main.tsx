import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { RouterProvider } from "react-router";
import { AppRouter } from "./routes/app-router.tsx";

export const WebApp = window.Telegram.WebApp;

WebApp.requestFullscreen();
WebApp.expand();

const queryClient = new QueryClient();

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRouter} />
    </QueryClientProvider>
  </StrictMode>
);

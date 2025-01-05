import { WebApp } from "@/main";

export const isMobile = () => {
  const platform = WebApp.platform;

  return platform === "android" || platform === "ios";
};

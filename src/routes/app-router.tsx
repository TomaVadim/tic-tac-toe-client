import {
  Navigate,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ROUTES } from "@/shared/enums/routes";
import { LoadingPage } from "@/pages/loading/loading.page";
import { MainLayout } from "@/layouts/main.layout";

export const AppRouter = createHashRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path={ROUTES.LOADING} element={<LoadingPage />} />

      <Route
        path={ROUTES.NOT_FOUND}
        element={<Navigate replace to={ROUTES.LOADING} />}
      />
    </Route>
  )
);

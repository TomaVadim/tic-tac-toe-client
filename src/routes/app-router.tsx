import {
  Navigate,
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { ROUTES } from "@/shared/enums/routes";
import { LoadingPage } from "@/pages/loading/loading.page";
import { MainLayout } from "@/layouts/main.layout";
import { lazy, Suspense } from "react";
import { Flex } from "@/ui/flex";
import { css } from "@emotion/css";
import { Loader } from "@/ui/loader";

const MainPage = lazy(() => import("@/pages/main/main.page"));

export const AppRouter = createHashRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path={ROUTES.LOADING} element={<LoadingPage />} />

      <Route
        path={ROUTES.MAIN}
        element={
          <Suspense
            fallback={
              <Flex
                className={css({ height: "100vh" })}
                fullWidth
                alignItems="center"
                justifyContent="center"
              >
                <Loader size="large" />
              </Flex>
            }
          >
            <MainPage />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.NOT_FOUND}
        element={<Navigate replace to={ROUTES.LOADING} />}
      />
    </Route>
  )
);

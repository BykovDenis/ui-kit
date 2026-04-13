"use client";

import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import React, { FunctionComponent, Suspense } from "react";
import HomePage from "./components/testing/core/home-page";
import InputTesting from "./components/testing/core/input-testing";
import TanstackRouterDevtools from "./tanstack-router-devtools";
import App from "./components/app";
import DatepickerTesting from "./components/testing/core/datepicker-testing";
import TextFieldTesting from "./components/testing/core/text-field-testing";
import SelectTesting from "./components/testing/core/select-testing";
import MultiSelectTesting from "./components/testing/core/multi-select-testing";
import SwitcherTesting from "./components/testing/core/switcher-testing";
import ErrorsStateTesting from "./components/testing/core/errors-state-testing";
import ContainersTesting from "./components/testing/core/containers-testing";
import TableTesting from "./components/testing/core/table-testing";
import CheckboxE2ETesting from "./components/testing/core/checkbox-e2e-testing";
import RadioE2ETesting from "./components/testing/core/radio-e2e-testing";
import TabsE2ETesting from "./components/testing/core/tabs-e2e-testing";
import PopupE2ETesting from "./components/testing/core/popup-e2e-testing";
import FileUploaderE2ETesting from "./components/testing/core/file-uploader-e2e-testing";
import IconTesting from "./components/testing/icon/icon-testing";
import PopupEventAccordion from "./components/testing/core/popup-event-accordion";
import PopupTesting from "./components/testing/core/popup-testing";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Suspense>
        <Outlet />
        <TanstackRouterDevtools />
      </Suspense>
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const inputRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/input",
  component: InputTesting,
});

const datepickerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/datepicker",
  component: DatepickerTesting,
});

const textfieldRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/textfield",
  component: TextFieldTesting,
});

const selectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/select",
  component: SelectTesting,
});

const multiSelectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/multi-select",
  component: MultiSelectTesting,
});

const switcherRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/switcher",
  component: SwitcherTesting,
});

const errorStateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/errors-state",
  component: ErrorsStateTesting,
});

const containersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/containers",
  component: ContainersTesting,
});

const tableRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/table",
  component: TableTesting,
});

const checkboxE2ERoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkbox-e2e",
  component: CheckboxE2ETesting,
});

const radioE2ERoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/radio-e2e",
  component: RadioE2ETesting,
});

const tabsE2ERoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tabs-e2e",
  component: TabsE2ETesting,
});

const popupE2ERoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/popup-e2e",
  component: PopupE2ETesting,
});

const fileUploaderE2ERoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/file-uploader-e2e",
  component: FileUploaderE2ETesting,
});

const iconRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/icon",
  component: IconTesting,
});

const popupEventAccordionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/popup-event-accordion",
  component: PopupEventAccordion,
});

const popupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/popup",
  component: PopupTesting,
});

// @ts-ignore-next-line
const routeTree = rootRoute.addChildren([
  indexRoute,
  inputRoute,
  datepickerRoute,
  textfieldRoute,
  selectRoute,
  multiSelectRoute,
  switcherRoute,
  errorStateRoute,
  containersRoute,
  tableRoute,
  checkboxE2ERoute,
  radioE2ERoute,
  tabsE2ERoute,
  popupE2ERoute,
  fileUploaderE2ERoute,
  iconRoute,
  popupEventAccordionRoute,
  popupRoute,
]);

const router = createRouter({ routeTree });

// Register the router instance for type safety
// @ts-ignore-next-line
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const Routes: FunctionComponent = () => {
  return (
    <>
      <App>
        <RouterProvider router={router} />
      </App>
    </>
  );
};

export default Routes;

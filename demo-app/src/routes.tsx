import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/app";
import DatepickerTesting from "./components/testing/core/datepicker-testing";
import InputTesting from "./components/testing/core/input-testing";
import TextFieldTesting from "./components/testing/core/text-field-testing";
import SelectTesting from "./components/testing/core/select-testing";
import MultiSelectTesting from "./components/testing/core/multi-select-testing";
import SwitcherTesting from "./components/testing/core/switcher-testing";
import ErrorsStateTesting from "./components/testing/core/errors-state-testing";
import ContainersTesting from "./components/testing/core/containers-testing";
import IconTesting from "./components/testing/icon/icon-testing";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <></>,
    },
    {
      path: "/datepicker",
      element: <DatepickerTesting />,
    },
    {
      path: "/input",
      element: <InputTesting />,
    },
    {
      path: "/textfield",
      element: <TextFieldTesting />,
    },
    {
      path: "/select",
      element: <SelectTesting />,
    },
    {
      path: "/multi-select",
      element: <MultiSelectTesting />,
    },
    {
      path: "/switcher",
      element: <SwitcherTesting />,
    },
    {
      path: "/errors-state",
      element: <ErrorsStateTesting />,
    },
    {
      path: "/containers",
      element: <ContainersTesting />,
    },
    {
      path: "/icon",
      element: <IconTesting />,
    },
  ]);

  return (
    <App>
      <RouterProvider router={router} />
    </App>
  );
};

export default Routes;

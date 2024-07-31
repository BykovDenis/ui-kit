import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DatepickerTesting from './components/datepicker-testing';
import App from './app';
import InputTesting from './components/input-testing';
import TextFieldTesting from './components/text-field-testing';
import SelectTesting from './components/select-testing';
import MultiSelectTesting from './components/multi-select-testing';
import SwitcherTesting from './components/switcher-testing';
import ErrorsStateTesting from './components/errors-state-testing';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <></>,
    },
    {
      path: '/datepicker',
      element: <DatepickerTesting />,
    },
    {
      path: '/input',
      element: <InputTesting />,
    },
    {
      path: '/textfield',
      element: <TextFieldTesting />,
    },
    {
      path: '/select',
      element: <SelectTesting />,
    },
    {
      path: '/multi-select',
      element: <MultiSelectTesting />,
    },
    {
      path: '/switcher',
      element: <SwitcherTesting />,
    },
    {
      path: '/errors-state',
      element: <ErrorsStateTesting />,
    },
  ]);

  return (
    <App>
      <RouterProvider router={router} />
    </App>
  );
};

export default Routes;

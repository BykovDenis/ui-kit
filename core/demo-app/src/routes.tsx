import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DatepickerTesting from './components/datepicker-testing';
import App from './app';
import InputTesting from './components/input-testing';
import TextFieldTesting from './components/text-field-testing';
import SelectTesting from './components/select-testing';
import MultiSelectTesting from './components/multi-select-testing';
import InputMaskedTesting from './components/input-masked-testing';

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
      path: '/inpu-t-masked',
      element: <InputMaskedTesting />,
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
  ]);

  return (
    <App>
      <RouterProvider router={router} />
    </App>
  );
};

export default Routes;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DatepickerTesting from './components/datepicker-testing';
import App from './app';
import InputTesting from './components/input-testing';
import TextFieldTesting from './components/text-field-testing';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <></>,
    },
    {
      path: '/datepickers',
      element: <DatepickerTesting />,
    },
    {
      path: '/inputs',
      element: <InputTesting />,
    },
    {
      path: '/textfields',
      element: <TextFieldTesting />,
    },
  ]);

  return (
    <App>
      <RouterProvider router={router} />
    </App>
  );
};

export default Routes;

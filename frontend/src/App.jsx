import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

import RegistrationScreen from "./routes/registration/RegistrationScreen"
import LoginScreen from './routes/login/LoginScreen';
import ForgotPasswordScreen from './routes/forgotPassword/ForgotPasswordScreen';
const Layout = () => (
  <main>
    <Outlet />
  </main>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/register", element: <RegistrationScreen /> },
      { path: "/", element: <LoginScreen /> },
      { path: "/forgot-password", element: <ForgotPasswordScreen /> }
    ],
  },
]);

// 4. Export the App with the RouterProvider
export default function App() {
  return <RouterProvider router={router} />;
}
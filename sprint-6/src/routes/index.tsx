import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { AdminRoutes } from './AdminRoutes';

const router = createBrowserRouter(createRoutesFromElements(<>{AdminRoutes()}</>));

export const AppRoutes = () => <RouterProvider router={router} />;

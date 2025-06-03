import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { MainRoutes } from './MainRoutes';

const router = createBrowserRouter(createRoutesFromElements(<>{MainRoutes()}</>));

export const AppRoutes = () => <RouterProvider router={router} />;

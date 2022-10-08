import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorView from '../../views/ErrorView';
import { HomeView } from '../../views/HomeView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
    errorElement: <ErrorView />,
  },
]);

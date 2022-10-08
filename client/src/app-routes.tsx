import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorView, HomeView, InvoicesView } from './views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
    errorElement: <ErrorView />,
  },
  {
    path: '/invoices',
    element: <InvoicesView />,
  },
]);

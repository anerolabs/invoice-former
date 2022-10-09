import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {
  ErrorView,
  // HomeView,
  InvoicesView,
  InvoiceView,
} from './views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        path: 'invoices',
        element: <InvoicesView />,
      },
      {
        path: 'invoices/:invoiceid',
        element: <InvoiceView />,
      },
    ],
  },
]);

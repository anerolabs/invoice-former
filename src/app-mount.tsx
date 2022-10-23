import React from 'react';
import { createRoot } from 'react-dom/client';

import AppProviders from './providers/AppProviders';
import { RouterProvider } from 'react-router-dom';
import { router } from './app-routes';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>
);

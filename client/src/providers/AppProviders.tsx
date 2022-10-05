import React, { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AlertProvider } from './alert/AlertProvider';

import CssBaseline from '@mui/material/CssBaseline';

const queryClient = new QueryClient();

export default function AppProviders(props: ProviderProps) {
  const { children } = props;
  return (
    <React.StrictMode>
      <CssBaseline />

      <QueryClientProvider client={queryClient}>
        <AlertProvider>{children}</AlertProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

type ProviderProps = {
  children: ReactNode;
};

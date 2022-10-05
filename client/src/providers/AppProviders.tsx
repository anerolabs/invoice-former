import React, { ReactNode } from 'react';

import AlertProvider from './alert/AlertProvider';

import CssBaseline from '@mui/material/CssBaseline';

export default function AppProviders(props: ProviderProps) {
  const { children } = props;
  return (
    <React.StrictMode>
      <CssBaseline />

      <AlertProvider>{children}</AlertProvider>
    </React.StrictMode>
  );
}

type ProviderProps = {
  children: ReactNode;
};

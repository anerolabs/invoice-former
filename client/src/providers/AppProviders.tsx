import React, { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export function AppProviders(props: ProviderProps) {
  const { children } = props;
  return (
    <React.StrictMode>
      <CssBaseline />
      {children}
    </React.StrictMode>
  );
}

type ProviderProps = {
  children: ReactNode;
};

export default AppProviders;

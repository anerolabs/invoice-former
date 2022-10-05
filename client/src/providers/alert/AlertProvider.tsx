import React, { createContext, useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Snackbar from '@mui/material/Snackbar';

export const AlertContext = createContext<string | undefined>(undefined);

export default function AlertProvider(props: ProviderProps) {
  const { children } = props;

  const { Provider } = AlertContext;
  console.log('Alert context', AlertContext);

  return <Provider value={'hiandrew'}>{children}</Provider>;
}

type ProviderProps = {
  children: React.ReactNode;
};

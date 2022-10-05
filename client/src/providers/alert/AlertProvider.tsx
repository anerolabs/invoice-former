import React, { createContext, useState } from 'react';

export const AlertContext = createContext<AlertContext | undefined>(undefined);

export function AlertProvider(props: ProviderProps) {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState({
    severity: 'info',
    message: 'hi andrew',
  } as Alert);
  const value = { isOpen, setIsOpen, alert, setAlert };

  const { Provider } = AlertContext;
  return <Provider value={value}>{children}</Provider>;
}

type AlertContext = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  alert: Alert;
  setAlert: (alert: Alert) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

type Severity = 'error' | 'warning' | 'info' | 'success';

type Alert = {
  message: string;
  severity: Severity;
};
